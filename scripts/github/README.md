# GitHub Project Management Scripts

This directory contains scripts for managing GitHub projects and issues.

## Project Status Management (`project.sh`)

A script to manage issues in GitHub Projects (beta), including status updates and project information.

### Prerequisites

- GitHub CLI (`gh`) installed and authenticated
- `jq` command-line JSON processor installed
  ```bash
  brew install jq  # for macOS
  ```

### Commands

#### 1. Update Issue Status
Updates the status of an issue in a project board.

```bash
./project.sh status <username> <project-number> <issue-number> <status>
```

- `<username>`: GitHub username
- `<project-number>`: Project board number
- `<issue-number>`: Issue number to update
- `<status>`: New status (Todo, In Progress, or Done)

Example:
```bash
./project.sh status stefa93 2 3 "In Progress"
```

#### 2. Check Issue Project
Shows which project an issue belongs to.

```bash
./project.sh check-issue <username> <issue-number>
```

Example:
```bash
./project.sh check-issue stefa93 3
```

#### 3. List Projects
Lists all available projects for a user.

```bash
./project.sh list-projects <username>
```

Example:
```bash
./project.sh list-projects stefa93
```

### Features

- Automatic project detection for issues
- Helpful error messages with suggestions
- Project title display in all operations
- Status validation
- Project membership verification

### Error Handling

The script provides helpful feedback in various scenarios:

1. Wrong project number:
   - Shows the correct project number for the issue
   - Lists all available projects

2. Invalid status:
   - Shows available status options

3. Issue not found:
   - Checks which project the issue belongs to
   - Suggests the correct project number

### Example Output

```bash
# Checking issue project
$ ./project.sh check-issue stefa93 3
Checking project membership for issue #3...
Issue #3 is in project: #2 - Core UI Components

# Updating status
$ ./project.sh status stefa93 2 3 "In Progress"
Info: Updating status for issue #3 to In Progress...
Success: Updated status of issue #3 to In Progress in project #2 (Core UI Components)

# Listing projects
$ ./project.sh list-projects stefa93
Available projects:
  Project #8: Documentation & DX
  Project #7: Performance & Monitoring
  Project #6: User Profile & Social
  Project #5: Newsletter System
  Project #4: Klussen Management
  Project #3: Authentication & Security
  Project #2: Core UI Components
  Project #1: Infrastructure & Setup
```
