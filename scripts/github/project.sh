#!/bin/bash

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

    project_id=$(echo "$project_info" | jq -r '.data.user.projectV2.id')
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
        echo "Error: Could not find issue #$issue_number in project"
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
        echo "Success: Updated status of issue #$issue_number to $new_status"
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
    *)
        echo "Unknown command: $command"
        echo "Available commands: status"
        exit 1
        ;;
esac 