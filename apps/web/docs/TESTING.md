# Unit Testing Guidelines

## Overview

This project uses Vitest as the testing framework along with React Testing Library for component
testing. All tests are written using TypeScript.

## Test Structure

- Tests are located next to the code they test in `__tests__` directories
- Test files should follow the naming convention: `*.test.ts` or `*.test.tsx`
- Use descriptive test names that explain the expected behavior

## Running Tests

```bash
# Run all tests
npm test

# Watch mode for development
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## Writing Tests

### Utilities and Functions

- Test the function's main purpose
- Include edge cases
- Test error conditions
- Group related tests using `describe` blocks

Example:

```typescript
describe('utilityFunction', () => {
  it('should handle normal case', () => {
    // test code
  });

  it('should handle edge case', () => {
    // test code
  });
});
```

### React Components

- Use React Testing Library
- Test behavior, not implementation
- Focus on user interaction
- Use semantic queries (getByRole, getByLabelText, etc.)

Example:

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Component', () => {
  it('should render correctly', () => {
    render(<Component />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should handle user interaction', async () => {
    render(<Component />);
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Clicked!')).toBeInTheDocument();
  });
});
```

## Best Practices

1. Write tests before implementing features (TDD)
2. Keep tests simple and focused
3. Use meaningful assertions
4. Don't test implementation details
5. Follow the Arrange-Act-Assert pattern
6. Use setup and cleanup when needed

## Coverage Requirements

- Aim for at least 80% code coverage
- Focus on critical business logic
- Don't chase 100% coverage at the expense of meaningful tests

## Mocking

- Use mocks sparingly
- Mock external dependencies
- Keep mocks simple and maintainable
- Use `vi.mock()` for module mocking

Example:

```typescript
import { vi } from 'vitest';

vi.mock('axios', () => ({
  default: {
    get: vi.fn(),
  },
}));
```
