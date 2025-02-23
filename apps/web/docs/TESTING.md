# Testing Guide

## Testing Structure

Our testing follows the project's component organization:

```
src/
├── components/
│   ├── ui/
│   │   ├── __tests__/      # UI component tests
│   │   └── stories/        # UI component stories
│   ├── features/
│   │   └── __tests__/      # Feature component tests
│   └── layouts/
│       └── __tests__/      # Layout component tests
└── __tests__/              # Global test utilities
```

## Component Testing

### UI Components
UI components in `src/components/ui/` should have:
- Unit tests in `__tests__/`
- Storybook stories in `stories/`
- Focus on component behavior and styling

Example:
```tsx
// Button.test.tsx
import { render, fireEvent } from '@testing-library/react'
import { Button } from '../Button'

describe('Button', () => {
  it('renders with default props', () => {
    const { getByRole } = render(<Button>Click me</Button>)
    expect(getByRole('button')).toBeInTheDocument()
  })

  it('handles click events', () => {
    const onClick = vi.fn()
    const { getByRole } = render(<Button onClick={onClick}>Click me</Button>)
    fireEvent.click(getByRole('button'))
    expect(onClick).toHaveBeenCalled()
  })
})
```

### Feature Components
Feature components in `src/components/features/` should have:
- Integration tests focusing on feature behavior
- Tests for data fetching and state management
- Mocked API calls where necessary

Example:
```tsx
// TaskList.test.tsx
import { render, waitFor } from '@testing-library/react'
import { TaskList } from '../TaskList'

describe('TaskList', () => {
  it('renders tasks from API', async () => {
    const { getAllByRole } = render(<TaskList />)
    await waitFor(() => {
      expect(getAllByRole('listitem')).toHaveLength(3)
    })
  })
})
```

### Layout Components
Layout components in `src/components/layouts/` should test:
- Proper rendering of child components
- Responsive behavior
- Navigation elements

## Test Types

1. Unit Tests
   - Individual component behavior
   - Utility functions
   - Type checking

2. Integration Tests
   - Feature components
   - API interactions
   - State management

3. E2E Tests (Cypress)
   - User flows
   - Critical paths
   - Cross-browser compatibility

## Best Practices

1. Component Testing:
   - Test behavior, not implementation
   - Use meaningful test descriptions
   - Follow AAA pattern (Arrange, Act, Assert)

2. Mocking:
   - Mock external dependencies
   - Use MSW for API mocking
   - Keep mocks close to tests

3. Coverage:
   - Aim for 80% coverage
   - Focus on business logic
   - Don't test implementation details

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test:watch

# Run with coverage
npm test:coverage

# Run E2E tests
npm run cypress
```

## Tools

- Vitest for unit/integration tests
- React Testing Library for component tests
- MSW for API mocking
- Cypress for E2E testing
- Storybook for component development
