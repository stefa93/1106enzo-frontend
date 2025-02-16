#!/bin/bash

# Function to list all projects for a user
list_projects() {
    local username=$1
    echo "Available projects:"
    gh api graphql -f query='
    query {
      user(login: "'$username'") {
        projectsV2(first: 10) {
          nodes {
            number
            title
          }
        }
      }
    }' --jq '.data.user.projectsV2.nodes[] | "  Project #\(.number): \(.title)"'
}

# Function to get project info for an issue
get_issue_project() {
    local username=$1
    local issue_number=$2
    
    echo "Checking project membership for issue #$issue_number..."
    local project_info=$(gh api graphql -f query='
    query {
      repository(owner: "'$username'", name: "1106enzo-frontend") {
        issue(number: '$issue_number') {
          projectItems(first: 1) {
            nodes {
              project {
                number
                title
              }
            }
          }
        }
      }
    }' --jq '.')
    
    local project_number=$(echo "$project_info" | jq -r '.data.repository.issue.projectItems.nodes[0].project.number')
    local project_title=$(echo "$project_info" | jq -r '.data.repository.issue.projectItems.nodes[0].project.title')
    
    if [ -n "$project_title" ] && [ "$project_title" != "null" ]; then
        echo "Issue #$issue_number is in project: #$project_number - $project_title"
        echo "$project_number"
    else
        echo "Issue #$issue_number is not in any project"
        return 1
    fi
}

# Function to update issue status in project
update_status() {
    local username=$1
    local project_number=$2
    local issue_number=$3
    local new_status=$4

    # Validate status
    if [[ ! "$new_status" =~ ^(Todo|In Progress|Done)$ ]]; then
        echo "Error: Invalid status. Available options: Todo, In Progress, Done"
        exit 1
    fi

    echo "Info: Updating status for issue #$issue_number to $new_status..."

    # Get project ID and status field info in one query
    project_info=$(gh api graphql -f query='
    {
      user(login: "'$username'") {
        projectV2(number: '$project_number') {
          id
          title
          field(name: "Status") {
            ... on ProjectV2SingleSelectField {
              id
              options {
                id
                name
              }
            }
          }
        }
      }
    }' --jq '.')

    if [ -z "$project_info" ] || [ "$(echo "$project_info" | jq -r '.data.user.projectV2')" = "null" ]; then
        echo "Error: Project #$project_number not found"
        list_projects "$username"
        exit 1
    fi

    project_id=$(echo "$project_info" | jq -r '.data.user.projectV2.id')
    project_title=$(echo "$project_info" | jq -r '.data.user.projectV2.title')
    status_field_id=$(echo "$project_info" | jq -r '.data.user.projectV2.field.id')
    
    # Get status option ID dynamically
    status_option_id=$(echo "$project_info" | jq -r --arg status "$new_status" '.data.user.projectV2.field.options[] | select(.name == $status) | .id')

    if [ -z "$status_option_id" ]; then
        echo "Error: Could not find option ID for status: $new_status"
        exit 1
    fi

    # Get item ID for the issue
    item_id=$(gh api graphql -f query='
    {
      user(login: "'$username'") {
        projectV2(number: '$project_number') {
          items(first: 100) {
            nodes {
              id
              content {
                ... on Issue {
                  number
                }
              }
            }
          }
        }
      }
    }' --jq '.data.user.projectV2.items.nodes[] | select(.content.number == '$issue_number') | .id')

    if [ -z "$item_id" ]; then
        echo "Error: Could not find issue #$issue_number in project #$project_number ($project_title)"
        actual_project=$(get_issue_project "$username" "$issue_number")
        if [ $? -eq 0 ]; then
            echo "Try running the command with project number: $actual_project"
        else
            list_projects "$username"
        fi
        exit 1
    fi

    # Update the status
    result=$(gh api graphql -f query='
    mutation {
      updateProjectV2ItemFieldValue(
        input: {
          projectId: "'$project_id'"
          itemId: "'$item_id'"
          fieldId: "'$status_field_id'"
          value: {
            singleSelectOptionId: "'$status_option_id'"
          }
        }
      ) {
        projectV2Item {
          id
        }
      }
    }')

    if echo "$result" | jq -e '.data.updateProjectV2ItemFieldValue.projectV2Item.id' > /dev/null; then
        echo "Success: Updated status of issue #$issue_number to $new_status in project #$project_number ($project_title)"
    else
        echo "Error: Failed to update status"
        echo "$result"
        exit 1
    fi
}

# Main script
command=$1
shift

case $command in
    "status")
        if [ $# -ne 4 ]; then
            echo "Usage: $0 status <username> <project-number> <issue-number> <status>"
            exit 1
        fi
        update_status "$1" "$2" "$3" "$4"
        ;;
    "list-projects")
        if [ $# -ne 1 ]; then
            echo "Usage: $0 list-projects <username>"
            exit 1
        fi
        list_projects "$1"
        ;;
    "check-issue")
        if [ $# -ne 2 ]; then
            echo "Usage: $0 check-issue <username> <issue-number>"
            exit 1
        fi
        get_issue_project "$1" "$2"
        ;;
    *)
        echo "Unknown command: $command"
        echo "Available commands: status, list-projects, check-issue"
        exit 1
        ;;
esac 