describe('UI Components', () => {
  beforeEach(() => {
    // Visit the page and ensure UI test component is visible
    cy.visit('/');
    cy.get('[data-testid="ui-test"]').should('be.visible');
  });

  describe('Toast Notifications', () => {
    it('should show and auto-close success toast', () => {
      // Click success button
      cy.get('[data-testid="show-success-toast"]').click();

      // Verify toast appears with correct message
      cy.get('.Toastify__toast--success')
        .should('be.visible')
        .and('contain', 'This is a success message!');

      // Wait for auto-close
      cy.wait(3500);

      // Verify toast disappears
      cy.get('.Toastify__toast--success').should('not.exist');
    });

    it('should show and auto-close error toast', () => {
      // Click error button
      cy.get('[data-testid="show-error-toast"]').click();

      // Verify toast appears with correct message
      cy.get('.Toastify__toast--error')
        .should('be.visible')
        .and('contain', 'This is an error message!');

      // Wait for auto-close
      cy.wait(3500);

      // Verify toast disappears
      cy.get('.Toastify__toast--error').should('not.exist');
    });

    it('should manually close toast', () => {
      // Click success button
      cy.get('[data-testid="show-success-toast"]').click();

      // Wait for toast to appear
      cy.get('.Toastify__toast--success')
        .should('be.visible')
        .and('contain', 'This is a success message!')
        .within(() => {
          // Click close button within this specific toast
          cy.get('.Toastify__close-button').click();
        });

      // Verify toast disappears
      cy.get('.Toastify__toast--success').should('not.exist');
    });

    it('should show toast in correct position', () => {
      // Click success button
      cy.get('[data-testid="show-success-toast"]').click();

      // Verify toast container position
      cy.get('.Toastify__toast-container--bottom-right')
        .should('be.visible')
        .within(() => {
          cy.get('.Toastify__toast--success')
            .should('be.visible')
            .and('contain', 'This is a success message!');
        });
    });
  });
});
