/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Custom command to verify toast notifications
     * @param type The type of toast (success or error)
     * @param message The message to verify
     * @example cy.verifyToast('success', 'Item saved successfully')
     */
    verifyToast(type: 'success' | 'error', message: string): Chainable<any>;

    /**
     * Custom command to visit Storybook stories
     * @param componentName The name of the component
     * @param storyName Optional story name
     * @example cy.visitStory('Button', 'Primary')
     */
    visitStory(componentName: string, storyName?: string): Chainable<any>;

    /**
     * Custom command to wait for a given selector to appear,
     * ensuring the story is fully loaded
     * @param selector Selector to wait for (defaults to 'button')
     * @example cy.waitForStoryToLoad('button')
     */
    waitForStoryToLoad(selector?: string): Chainable<any>;
  }
}

Cypress.Commands.add('verifyToast', (type: 'success' | 'error', message: string) => {
  cy.get('.Toastify__toast-container--bottom-right').should('be.visible');
  cy.get(`.Toastify__toast--${type}`).should('be.visible').and('contain', message);
  return cy.get(`.Toastify__toast--${type}`);
});

Cypress.Commands.add('visitStory', (componentName: string, storyName?: string) => {
  const formattedComponentName = componentName.replace(/\//g, '-').toLowerCase();
  const storyId = storyName
    ? `${formattedComponentName}--${storyName.toLowerCase().replace(/\s+/g, '-')}`
    : formattedComponentName;

  const storybookUrl = Cypress.env('STORYBOOK_URL') || 'http://localhost:6006';
  const storyUrl = `${storybookUrl}/iframe.html?id=${storyId}`;

  cy.log(`Visiting Storybook story: ${storyUrl}`);

  return cy.visit(storyUrl, {
    timeout: 30000,
    onBeforeLoad: (win) => {
      cy.spy(win.console, 'error').as('consoleError');
    },
  });
});

Cypress.Commands.add('waitForStoryToLoad', (selector = 'button') => {
  cy.log(`Waiting for story to load: ${selector}`);
  cy.get(selector, { timeout: 20000 }).should('be.visible');
});
