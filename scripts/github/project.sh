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
    }

    echo "Info: Updating status for issue #$issue_number to $new_status..."

    # Get project ID
    project_id=$(gh api graphql -f query='
    {
      user(login: "'$username'") {
        projectV2(number: '$project_number') {
          id
        }
      }
    }' --jq '.data.user.projectV2.id')

    # Get status field ID
    status_field_id=$(gh api graphql -f query='
    {
      user(login: "'$username'") {
        projectV2(number: '$project_number') {
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
    }' --jq '.data.user.projectV2.field.id')

    # Get status option ID
    status_option_id=$(gh api graphql -f query='
    {
      user(login: "'$username'") {
        projectV2(number: '$project_number') {
          field(name: "Status") {
            ... on ProjectV2SingleSelectField {
              options {
                id
                name
              }
            }
          }
        }
      }
    }' --jq '.data.user.projectV2.field.options[] | select(.name == "'$new_status'") | .id')

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

    # Update the status
    gh api graphql -f query='
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
    }'
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