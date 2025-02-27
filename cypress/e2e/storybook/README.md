# Storybook E2E Tests

This directory contains end-to-end tests for components displayed in Storybook, focusing on our Button component.

## Testing Structure

The tests are organized to match the Storybook component structure:

```
cypress/e2e/storybook/
├── actions/               # Interactive components like buttons
│   └── Button.cy.ts       # Button component tests
└── README.md              # This file
```

The Button component test file follows these patterns:
- Tests are grouped by aspect (functionality, appearance, variants, accessibility)
- Each story variant in Storybook has corresponding tests
- Accessibility tests are included

## Running the Tests

You can run the Storybook E2E tests using the following commands:

```bash
# Run all Storybook tests in headless mode
pnpm run test:e2e:storybook

# Run all Storybook tests in interactive mode
pnpm run test:e2e:storybook:open

# Run tests for the Button component specifically
pnpm run test:e2e:storybook:actions
```

## Testing Approach

We use the custom `visitStory` command to load components from Storybook:

```typescript
// Visit a specific story by component and story name
cy.visitStory('Actions/Button', 'Primary');

// Then test the component
cy.get('button').should('be.visible').and('have.class', 'bg-brand-600');
```

## Component Test Structure

Our Button component test file follows this structure:

1. **Functionality Tests** - Basic functionality of the component
2. **Appearance/Variant Tests** - Visual styling and variations
3. **Size Tests** - Different size variants
4. **Interaction Tests** - How users interact with the component
5. **Accessibility Tests** - A11y compliance checks

## Accessibility Testing

We use cypress-axe for accessibility testing:

```typescript
it('should be accessible', () => {
  cy.visitStory('Actions/Button', 'Primary');
  cy.injectAxe();
  cy.checkA11y('button');
});
```

## Best Practices

When writing component tests:

1. Test each story variant from Storybook
2. Use data-testid attributes for reliable selection
3. Test both appearance and behavior
4. Include accessibility tests for all components
5. Keep selectors consistent between tests

## Related Documentation

- [Storybook E2E Testing Documentation](https://storybook.js.org/docs/writing-tests/import-stories-in-tests/stories-in-end-to-end-tests)
- [Cypress Testing Documentation](https://docs.cypress.io/guides/overview/why-cypress)
- [Cypress-axe Documentation](https://github.com/component-driven/cypress-axe) 