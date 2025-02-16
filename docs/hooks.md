# Git Hooks Documentation

This project uses Husky to manage Git hooks for maintaining code quality and consistency.

## Available Hooks

### Pre-commit Hook

Runs automatically before each commit and performs:

- Code formatting via lint-staged (Prettier)
- Linting checks
- Unit tests

```bash
# Located in .husky/pre-commit
```

### Commit Message Hook

Validates commit messages to ensure they follow the
[Conventional Commits](https://www.conventionalcommits.org/) specification:

```bash
# Located in .husky/commit-msg
```

Valid commit message format:

```
type(scope?): subject
```

Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `perf`: Performance improvements
- `ci`: CI/CD changes
- `build`: Build system changes
- `revert`: Reverting changes

### Pre-push Hook

Runs before pushing to remote and performs:

- Full project build check

```bash
# Located in .husky/pre-push
```

## Skipping Hooks

For emergency fixes or when hooks need to be bypassed, you can use the `HUSKY=0` environment
variable:

```bash
# Skip all hooks for a commit
HUSKY=0 git commit -m "emergency: hotfix description"

# Skip all hooks for a push
HUSKY=0 git push
```

**Note**: Use hook skipping sparingly and only for emergency situations.

## Development Workflow

1. Make your changes
2. Stage your changes: `git add .`
3. Commit with a conventional commit message: `git commit -m "type: description"`
   - Hook will run formatting, linting, and tests
4. Push your changes: `git push`
   - Hook will verify the build

## Troubleshooting

If hooks aren't running:

1. Ensure Husky is installed: `npm install`
2. Check hook permissions: `ls -la .husky/`
3. Verify hook files exist and are executable
4. Run `npm run prepare` to reinstall hooks

## Adding New Hooks

To add a new hook:

```bash
npx husky add .husky/hook-name "npm run command"
chmod +x .husky/hook-name
```
