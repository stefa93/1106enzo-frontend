# ESLint Configuration

This document outlines the ESLint configuration used in the project.

## Overview

Our ESLint configuration is designed to maintain high code quality and consistency across the codebase. It includes:

- TypeScript support
- React and React Hooks rules
- Import sorting and organization
- Next.js specific rules

## Key Features

- Strict TypeScript checks
- React Hooks rules enforcement
- Automated import sorting
- VS Code integration

## Rules

### TypeScript
- No unused variables (`@typescript-eslint/no-unused-vars`)
- No explicit `any` (`@typescript-eslint/no-explicit-any`)
- No non-null assertions (`@typescript-eslint/no-non-null-assertion`)

### React Hooks
- Rules of Hooks (`react-hooks/rules-of-hooks`)
- Exhaustive Dependencies (`react-hooks/exhaustive-deps`)

### Import Organization
- Sorted imports with defined groups
- No duplicate imports
- Consistent newlines after imports

## VS Code Integration

The project includes VS Code settings for automatic ESLint integration:

- Auto-fix on save
- Format on save
- Validation for JavaScript, TypeScript, and React files

## GitHub Actions

Linting is automatically run on:
- Pull requests to main
- Pushes to main

## Running Locally

To run ESLint locally:

```bash
# From the web app directory
npm run lint

# To fix automatically fixable issues
npm run lint -- --fix
``` 