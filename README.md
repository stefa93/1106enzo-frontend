# enZo Project

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
```

## CI/CD

This project uses GitHub Actions for continuous integration and deployment. The pipeline
automatically:

- Builds all applications and packages
- Runs tests and linting
- Verifies type checking
- Caches dependencies and build artifacts

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
