// Import Testing Library Cypress commands
import '@testing-library/cypress/add-commands';

// Import our custom commands
import './commands';

declare global {
  namespace Cypress {
    interface Window {
      // Add any custom window properties you need to access in tests
    }
  }
}

// Add any custom commands that are actually needed for our tests here
