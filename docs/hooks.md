# Git Hooks

This project uses Lefthook to manage Git hooks for maintaining code quality and consistency.

## Available Hooks

### Pre-commit Hook

Runs automatically before each commit to ensure code quality:

- Code formatting via lint-staged (Prettier)
- Test suite execution (test:ci)

The pre-commit hook runs these checks in parallel for better performance.

### Commit Message Hook

Validates commit messages to ensure they follow conventional commit format:

```bash
type(scope): description
```

Uses commitlint to enforce the format.

### Pre-push Hook

Runs before pushing to remote to ensure code stability:

- Full build verification

## Bypassing Hooks

For emergency fixes or when hooks need to be bypassed, you can use the `LEFTHOOK=0` environment
variable:

```bash
# Skip pre-commit hooks
LEFTHOOK=0 git commit -m "emergency: hotfix description"

# Skip pre-push hooks
LEFTHOOK=0 git push
```

## Hook Configuration

All hooks are configured in `lefthook.yml` in the project root. The configuration includes:

- Parallel execution of pre-commit checks
- Glob patterns for linting
- Output formatting options

## Troubleshooting

If hooks aren't running:

1. Ensure Lefthook is installed: `npm install`
2. Check hook installation: `npx lefthook install`

## Adding New Hooks

To add a new hook:

1. Edit `lefthook.yml`
2. Add your hook under the appropriate section:

```yaml
hook-name:
  commands:
    command-name:
      run: npm run command
```

3. Run `npx lefthook install` to update the hooks
