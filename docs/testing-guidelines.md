# Testing Guidelines

## Cypress End-to-End Testing

This document outlines our testing strategy and guidelines for end-to-end testing using Cypress.

## Test Organization

Our Cypress tests are organized into three main categories:

```
cypress/
├── e2e/
│   ├── frontend/     # Frontend UI tests
│   ├── backend/      # Admin panel & backend tests
│   └── integration/  # API integration tests
├── fixtures/         # Test data
└── support/          # Custom commands & utilities
```

## Running Tests Locally

1. **Installation**
   ```bash
   npm install
   ```

2. **Running Tests**
   - Open Cypress Test Runner:
     ```bash
     npm run cypress:open
     ```
   - Run tests headlessly:
     ```bash
     npm run cypress:run
     ```
   - Run specific test file:
     ```bash
     npm run cypress:run --spec "cypress/e2e/frontend/**/*.cy.ts"
     ```

## Best Practices

1. **Test Structure**
   - Use descriptive test names
   - Follow the AAA pattern (Arrange, Act, Assert)
   - Keep tests independent
   - Use custom commands for common operations

2. **Selectors**
   ```typescript
   // ❌ Don't use brittle selectors
   cy.get('.some-class')
   
   // ✅ Use data-testid
   cy.get('[data-testid="submit-button"]')
   ```

3. **Fixtures**
   - Store test data in `cypress/fixtures`
   - Use meaningful file names
   - Keep fixtures small and focused

4. **Custom Commands**
   - Create reusable commands in `cypress/support/commands.ts`
   - Document command parameters and return types

## Writing Tests

```typescript
describe('Feature Name', () => {
  beforeEach(() => {
    // Setup code
    cy.visit('/path')
  })

  it('should perform expected action', () => {
    // Arrange
    cy.get('[data-testid="input"]').as('input')

    // Act
    cy.get('@input').type('test value')
    cy.get('[data-testid="submit"]').click()

    // Assert
    cy.get('[data-testid="result"]').should('contain', 'Expected Result')
  })
})
```

## CI/CD Integration

Tests are automatically run in our CI pipeline for:
- Pull requests to main branch
- Pushes to main branch

The pipeline:
1. Sets up Node.js environment
2. Installs dependencies
3. Builds the application
4. Runs Cypress tests
5. Reports results

## Debugging

1. **Screenshots**
   - Automatically captured on test failure
   - Located in `cypress/screenshots`

2. **Videos**
   - Recorded for CI runs
   - Located in `cypress/videos`

3. **Debug Commands**
   ```typescript
   cy.debug() // Pause execution
   cy.log('Debug message')
   ```

## Common Issues & Solutions

1. **Test Flakiness**
   - Use proper waiting strategies
   - Avoid timing-dependent tests
   - Use retry-ability when needed

2. **Network Requests**
   - Intercept and stub network requests
   - Handle loading states properly
   ```typescript
   cy.intercept('GET', '/api/data').as('getData')
   cy.wait('@getData')
   ```

## Resources

- [Cypress Documentation](https://docs.cypress.io)
- [Best Practices Guide](https://docs.cypress.io/guides/references/best-practices)
- [TypeScript Support](https://docs.cypress.io/guides/tooling/typescript-support) 