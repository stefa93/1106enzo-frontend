// Import Testing Library Cypress commands
import '@testing-library/cypress/add-commands';

// Import our custom commands
import './commands';

declare global {
  namespace Cypress {
    interface Chainable {
      visitStory: (storyId: string, parameters?: Record<string, unknown>) => Chainable<Element>;
    }
    interface Window {
      // Add any custom window properties you need to access in tests
    }
  }
}

// Helper function to visit Storybook stories
Cypress.Commands.add('visitStory', (storyId: string, parameters = {}) => {
  const parametersString = Object.entries(parameters)
    .map(([key, value]) => `${key}:${value}`)
    .join(';');

  const url = parametersString
    ? `iframe.html?id=${storyId}&globals=${parametersString}`
    : `iframe.html?id=${storyId}`;

  return cy.visit(`http://localhost:6006/${url}`);
});

// Add any custom commands that are actually needed for our tests here
