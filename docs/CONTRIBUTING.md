# Contributing Guide

## Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages. This leads
to more readable messages that are easy to follow when looking through the project history and
enables automatic generation of changelogs.

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

### Type

Must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to our CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files
- **revert**: Reverts a previous commit

### Scope

The scope should be the name of the area affected (as perceived by the person reading the changelog
generated from commit messages). Examples:

- **auth**
- **ui**
- **api**
- **core**
- etc.

### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense. The body should include the
motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

Breaking Changes should start with the word `BREAKING CHANGE:` with a space or two newlines. The
rest of the commit message is then used for this.

### Examples

```
feat(auth): add Google OAuth integration

Implement Google OAuth sign-in functionality to provide users with an additional
authentication option.

Closes #123
```

```
fix(ui): correct button alignment in mobile view

The primary action button was misaligned on mobile devices smaller than 375px.
This fixes the layout by adjusting the flexbox properties.

Fixes #456
```

```
docs: update API documentation with new endpoints

Add documentation for the newly implemented user management endpoints.
Include request/response examples and authentication requirements.
```

```
BREAKING CHANGE: change authentication API response format

The authentication API now returns a JWT token in the response body instead
of setting it as a cookie. This change requires clients to update their
token handling logic.

Closes #789
```

## VS Code Setup

We recommend installing the following VS Code extensions to help with commit messages:

1. [Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)
2. [Git Lens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

## Commit Validation

All commits are automatically validated using commitlint. If your commit message doesn't follow the
convention, it will be rejected. You can use the provided commit message template by running:

```bash
git commit
```

This will open your editor with a template that includes helpful guidelines.

## CI/CD Pipeline

Our project uses GitHub Actions for continuous integration and deployment. The pipeline includes:

### Automated Checks

- Build verification for Next.js and Strapi
- Unit tests execution
- Linting
- Type checking

### Running Locally

Before pushing your changes, you can run the same checks locally:

```bash
# Install dependencies
npm ci

# Build all packages
npm run build

# Run tests
npm run test

# Run linting
npm run lint
```

### Workflow Status

The CI pipeline runs on:

- All pull requests
- Pushes to main branch

Make sure all checks pass before requesting a review.
