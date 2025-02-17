# enZo Project

[![Coverage](https://codecov.io/gh/stefa93/1106enzo-frontend/branch/main/graph/badge.svg)](https://codecov.io/gh/stefa93/1106enzo-frontend)
[![Web Coverage](https://codecov.io/gh/stefa93/1106enzo-frontend/branch/main/graph/badge.svg?flag=web)](https://codecov.io/gh/stefa93/1106enzo-frontend)
[![Strapi Coverage](https://codecov.io/gh/stefa93/1106enzo-frontend/branch/main/graph/badge.svg?flag=strapi)](https://codecov.io/gh/stefa93/1106enzo-frontend)

A monorepo containing the enZo project applications and shared packages.

## Structure

```
.
├── apps/
│   ├── web/          # Next.js frontend application
│   └── strapi/       # Strapi 5 backend application
└── packages/
    └── shared/       # Shared code and utilities
```

## Development

This project uses Turborepo for monorepo management. Common commands:

```bash
# Install dependencies
npm install

# Development
npm run dev

# Build
npm run build

# Lint
npm run lint

# Test
npm run test

# Run tests with coverage
npm run test:coverage
```

## Test Coverage

This project uses Vitest for testing and code coverage across all applications. Coverage reports are
generated in multiple formats:

- HTML: Interactive coverage report in `coverage/index.html`
- LCOV: Coverage data for CI tools in `coverage/lcov.info`
- JSON: Machine-readable format in `coverage/coverage-final.json`
- Text: Console output during test runs

Coverage thresholds are temporarily disabled during initial development. They will be re-enabled
once we have established a baseline test coverage.

To view coverage reports:

1. Run `npm run test:coverage` in the root directory or specific app
2. Open `coverage/index.html` in your browser for detailed reports

Coverage artifacts are automatically ignored in git and should not be committed.

## CI/CD

This project uses GitHub Actions for continuous integration and deployment. The pipeline
automatically:

- Builds all applications and packages
- Runs tests and linting
- Verifies type checking
- Caches dependencies and build artifacts
- Generates and checks test coverage reports

Status checks must pass before merging pull requests. For more details, see:

- [Contributing Guide](docs/CONTRIBUTING.md#ci-cd-pipeline)
- [GitHub Actions Workflows](.github/workflows)

## Documentation

- [Contributing](docs/CONTRIBUTING.md) - Development workflow and guidelines
- [Styling Guide](docs/styling.md) - Tailwind CSS configuration and usage
- [Formatting](docs/formatting.md) - Code formatting guidelines
- [Git Hooks](docs/hooks.md) - Git hooks configuration and usage

## Requirements

- Node.js >= 18.0.0
- npm >= 10.2.4

This project uses Lefthook for git hooks management. See `docs/hooks.md` for more information.
