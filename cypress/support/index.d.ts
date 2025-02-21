/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to verify toast notification
     * @param type The type of toast ('success' | 'error')
     * @param message The expected message in the toast
     * @example cy.verifyToast('success', 'Operation completed')
     */
    verifyToast(type: 'success' | 'error', message: string): Chainable<JQuery<HTMLElement>>;
  }
}
