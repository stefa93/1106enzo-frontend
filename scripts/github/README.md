# GitHub Scripts

This directory contains scripts for managing GitHub project tasks.

## Scripts

### project.sh

Updates issue status in GitHub project board.

Usage:

```bash
./scripts/github/project.sh status <username> <project-number> <issue-number> <status>
```

Parameters:

- `username`: GitHub username
- `project-number`: Project board number
- `issue-number`: Issue number
- `status`: One of: "Todo", "In Progress", "Done"

Example:

```bash
./scripts/github/project.sh status stefa93 1 123 "In Progress"
```
