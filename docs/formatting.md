# Code Formatting Guidelines

This project uses Prettier for automated code formatting to maintain consistent code style across
the codebase.

## Configuration

Our Prettier configuration is defined in `.prettierrc.js` with the following key settings:

- Single quotes for strings
- 2 spaces for indentation
- Semicolons at the end of statements
- Trailing commas in objects and arrays (ES5 style)
- 80 characters max line width (100 for markdown files)
- Unix line endings (LF)
- Arrow function parentheses always included
- Tailwind CSS class sorting enabled

## VS Code Integration

To enable automatic formatting in VS Code:

1. Install the "Prettier - Code formatter" extension
2. The workspace settings are already configured to:
   - Format on save
   - Use Prettier as the default formatter
   - Run ESLint fixes on save

## Pre-commit Hooks

We use husky and lint-staged to ensure all committed code is properly formatted:

- Pre-commit hooks will automatically format staged files
- Commits will be blocked if formatting fails

## NPM Scripts

Available formatting commands:

```bash
# Format all files
npm run format

# Check formatting without making changes
npm run format:check
```

## Supported File Types

Prettier will format the following file types:

- TypeScript (.ts, .tsx)
- JavaScript (.js, .jsx)
- JSON (.json)
- Markdown (.md)

## CI/CD Integration

GitHub Actions will:

- Check formatting on all PRs
- Block merging if formatting checks fail

## Best Practices

1. Always run `npm run format` before committing changes
2. Keep line lengths reasonable (80 chars) for better readability
3. Use consistent naming conventions:
   - PascalCase for components
   - camelCase for variables and functions
   - kebab-case for file names
4. Let Prettier handle all formatting concerns - don't fight the formatter

## Tailwind CSS

The Prettier configuration includes `prettier-plugin-tailwindcss` which will:

- Sort Tailwind CSS classes in a consistent order
- Follow the official Tailwind CSS class ordering conventions
