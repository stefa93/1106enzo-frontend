#!/bin/bash

# Colors for better visibility
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to create a temporary issue from template
create_temp_issue() {
    template_content=$(cat docs/templates/issue-template.md)
    temp_file=".temp_issue.md"
    echo "$template_content" > "$temp_file"
    echo -e "${GREEN}Temporary issue created at $temp_file${NC}"
}

# Function to fetch existing issue content
fetch_issue_content() {
    issue_number=$1
    temp_file=".temp_issue.md"
    echo -e "${BLUE}Fetching content from issue #$issue_number...${NC}"
    gh issue view "$issue_number" --json body --jq '.body' | sed 's/\\n/\n/g' > "$temp_file"
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}Content fetched successfully${NC}"
        return 0
    else
        echo -e "${RED}Failed to fetch issue content${NC}"
        return 1
    fi
}

# Function to preview content
preview_content() {
    temp_file=".temp_issue.md"
    if [ ! -f "$temp_file" ]; then
        echo -e "${RED}No content to preview${NC}"
        return 1
    fi
    
    echo -e "${YELLOW}Preview of the issue content:${NC}"
    echo "----------------------------------------"
    cat "$temp_file"
    echo "----------------------------------------"
    
    read -p "Continue with this content? (y/n): " confirm
    if [[ $confirm =~ ^[Yy]$ ]]; then
        return 0
    else
        return 1
    fi
}

# Function to open editor
open_editor() {
    if [ -n "$EDITOR" ]; then
        $EDITOR "$1"
    elif command -v nano >/dev/null 2>&1; then
        nano "$1"
    elif command -v vim >/dev/null 2>&1; then
        vim "$1"
    else
        echo -e "${RED}No suitable editor found. Please edit .temp_issue.md manually.${NC}"
        return 1
    fi
}

# Function to manage labels
manage_labels() {
    issue_number=$1
    echo -e "${BLUE}Available labels:${NC}"
    gh label list
    
    read -p "Enter labels (comma-separated) or press enter to skip: " labels
    if [ -n "$labels" ]; then
        gh issue edit "$issue_number" --add-label "$labels"
    fi
}

# Function to update an existing issue
update_issue() {
    issue_number=$1
    labels=$2
    temp_file=".temp_issue.md"
    
    if [ ! -f "$temp_file" ]; then
        echo -e "${RED}Error: Temporary issue file not found${NC}"
        exit 1
    fi
    
    # Update the issue using the temporary file content
    gh issue edit "$issue_number" --body-file "$temp_file"
    
    # Add labels if provided
    if [ -n "$labels" ]; then
        gh issue edit "$issue_number" --add-label "$labels"
    fi
    
    # Clean up
    rm "$temp_file"
    echo -e "${GREEN}Issue #$issue_number updated successfully${NC}"
}

# Function to create a new issue
create_issue() {
    title=$1
    labels=$2
    temp_file=".temp_issue.md"
    
    if [ ! -f "$temp_file" ]; then
        echo -e "${RED}Error: Temporary issue file not found${NC}"
        exit 1
    fi
    
    # Create the issue using the temporary file content
    if [ -n "$labels" ]; then
        gh issue create --title "$title" --body-file "$temp_file" --label "$labels"
    else
        gh issue create --title "$title" --body-file "$temp_file"
    fi
    
    # Clean up
    rm "$temp_file"
    echo -e "${GREEN}Issue created successfully${NC}"
}

# Main script logic
case "$1" in
    "create")
        if [ -z "$2" ]; then
            echo -e "${RED}Error: Issue title required${NC}"
            echo "Usage: $0 create <title> [labels]"
            exit 1
        fi
        create_temp_issue
        create_issue "$2" "$3"
        ;;
    "update")
        if [ -z "$2" ]; then
            echo -e "${RED}Error: Issue number required${NC}"
            echo "Usage: $0 update <issue-number> [labels]"
            exit 1
        fi
        if fetch_issue_content "$2"; then
            update_issue "$2" "$3"
        fi
        ;;
    *)
        echo "Usage: $0 {create <title> [labels] | update <issue-number> [labels]}"
        exit 1
        ;;
esac 