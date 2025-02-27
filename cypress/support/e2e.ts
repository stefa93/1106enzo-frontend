import '@testing-library/cypress/add-commands';
import 'cypress-axe';
import './commands';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Visit a Storybook story
       * @example cy.visitStory('Button', 'Primary')
       */
      visitStory(componentName: string, storyName?: string): Chainable<Element>;

      /**
       * Verify toast notifications
       * @example cy.verifyToast('success', 'Saved!')
       */
      verifyToast(type: 'success' | 'error', message: string): Chainable<Element>;

      /**
       * Wait for a story to load (checks a given selector)
       * @example cy.waitForStoryToLoad('button')
       */
      waitForStoryToLoad(selector?: string): Chainable<Element>;
    }
  }
}

Cypress.on('uncaught:exception', () => false);

beforeEach(() => {
  cy.window({ log: false }).then((win) => {
    if (win.axe) {
      win.axe.configure({
        reporter: 'v2',
        rules: [
          { id: 'landmark-one-main', enabled: false },
          { id: 'page-has-heading-one', enabled: false },
        ],
      });
    }
  });
});
