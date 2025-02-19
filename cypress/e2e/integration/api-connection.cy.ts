describe('Frontend-Strapi Integration', () => {
  beforeEach(() => {
    // Log environment variables for debugging
    cy.log('STRAPI_URL:', Cypress.env('STRAPI_URL'));
    cy.log('FRONTEND_URL:', Cypress.env('FRONTEND_URL'));

    // Reset any previous interceptions
    const strapiUrl = Cypress.env('STRAPI_URL') || 'http://localhost:1337';
    cy.intercept('GET', `${strapiUrl}/api/tasks`).as('tasksRequest');
  });

  it('should display loading state while fetching tasks', () => {
    const frontendUrl = Cypress.env('FRONTEND_URL') || 'http://localhost:3000';
    cy.visit(frontendUrl);
    cy.log('Waiting for loading state...');
    cy.get('[data-testid="tasks-loading"]').should('be.visible');
    cy.wait('@tasksRequest');
  });

  it('should successfully fetch and display tasks', () => {
    const strapiUrl = Cypress.env('STRAPI_URL') || 'http://localhost:1337';
    // Mock successful response
    cy.intercept('GET', `${strapiUrl}/api/tasks`, {
      statusCode: 200,
      body: {
        data: [
          {
            id: 1,
            attributes: {
              title: 'Test Task',
              description: 'Test Description',
              category: 'maintenance',
              status: 'open',
              location: 'Test Location',
            },
          },
        ],
      },
    }).as('tasksRequest');

    const frontendUrl = Cypress.env('FRONTEND_URL') || 'http://localhost:3000';
    cy.visit(frontendUrl);
    cy.wait('@tasksRequest');

    // Verify task is displayed
    cy.get('[data-testid="task-1"]').should('be.visible');
    cy.get('[data-testid="task-1"]').within(() => {
      cy.contains('Test Task');
      cy.contains('Test Description');
      cy.contains('maintenance');
      cy.contains('Test Location');
      cy.contains('open');
    });
  });

  it('should handle empty task list', () => {
    const strapiUrl = Cypress.env('STRAPI_URL') || 'http://localhost:1337';
    // Mock empty response
    cy.intercept('GET', `${strapiUrl}/api/tasks`, {
      statusCode: 200,
      body: { data: [] },
    }).as('emptyTasksRequest');

    const frontendUrl = Cypress.env('FRONTEND_URL') || 'http://localhost:3000';
    cy.visit(frontendUrl);
    cy.wait('@emptyTasksRequest');
    cy.contains('No tasks available.');
  });

  it('should handle API errors gracefully', () => {
    const strapiUrl = Cypress.env('STRAPI_URL') || 'http://localhost:1337';
    // Mock error response
    cy.intercept('GET', `${strapiUrl}/api/tasks`, {
      statusCode: 500,
      body: { error: 'Internal Server Error' },
    }).as('failedRequest');

    const frontendUrl = Cypress.env('FRONTEND_URL') || 'http://localhost:3000';
    cy.visit(frontendUrl);
    cy.wait('@failedRequest');
    cy.get('[data-testid="tasks-error"]').should('be.visible');
    cy.get('[data-testid="tasks-error"]').contains('Failed to fetch tasks');
  });
});
