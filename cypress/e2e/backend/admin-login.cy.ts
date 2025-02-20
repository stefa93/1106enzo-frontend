describe('Strapi Admin Login', () => {
  beforeEach(() => {
    cy.visit('/admin');
  });

  it('should display the login form', () => {
    cy.get('form').should('exist');
    cy.get('input[name="email"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it('should show error message with invalid credentials', () => {
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();

    // Wait for the error message
    cy.get('[role="alert"]').should('exist');
  });
});
