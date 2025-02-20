/// <reference types="cypress" />

describe('Frontend Smoke Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the home page with basic structure', () => {
    cy.get('html').should('have.attr', 'lang', 'en');
    cy.get('body').should('have.class', 'antialiased');
  });

  it('should have toast container mount point', () => {
    cy.get('.Toastify').should('exist');
  });

  it('should handle 404 pages gracefully', () => {
    Cypress.on('uncaught:exception', (err) => {
      if (err.message.includes('NEXT_NOT_FOUND')) {
        return false;
      }
    });
    cy.visit('/non-existent-page', { failOnStatusCode: false });
    cy.url().should('include', '/non-existent-page');
  });

  it('should maintain responsive layout', () => {
    // Mobile view
    cy.viewport('iphone-6');
    cy.get('body').should('be.visible');

    // Tablet view
    cy.viewport('ipad-2');
    cy.get('body').should('be.visible');

    // Desktop view
    cy.viewport(1920, 1080);
    cy.get('body').should('be.visible');
  });
});
