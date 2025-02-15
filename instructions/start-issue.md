# Starting Work on an Issue

Follow these steps when starting work on an issue:

## 1. Update Issue Status

Use the project script to set the issue status to "In Progress":

```bash
./scripts/github/project.sh status stefa93 <project-number> <issue-number> "In Progress"
```

## 2. Create Feature Branch

Create and checkout a feature branch linked to the issue:

```bash
gh issue develop <issue-number> --name "<type>/<description>-<issue-number>"
```

Example:

```bash
gh issue develop 123 --name "feature/user-auth-123"
```

## 3. Development Process

1. Create test files first:

   - `src/components/<Component>.tsx`
   - `src/components/__tests__/*`
   - `src/components/stories/*`

2. Follow TDD cycle:
   ```bash
   npm run test:watch <Component>
   ```

## 4. Commit Changes

Use conventional commit messages with issue reference:

```bash
git commit -m "feat: add user authentication (fixes #123)"
```

Types:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting
- `refactor:` Code restructuring
- `test:` Adding tests
- `chore:` Maintenance

## 5. Create Pull Request

Create a pull request linked to the issue:

```bash
gh pr create --base main --title "<type>: <description> (fixes #<issue-number>)" --body "Implements:
- Feature 1
- Feature 2
- Feature 3"
```

## 6. Mark as Complete

After PR is merged, update issue status to "Done":

```bash
./scripts/github/project.sh status stefa93 <project-number> <issue-number> "Done"
```
