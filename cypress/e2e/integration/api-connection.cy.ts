describe('Frontend-Strapi Integration', () => {
  beforeEach(() => {
    // Reset any previous interceptions
    cy.intercept('GET', `${Cypress.env('STRAPI_URL')}/api/tasks`).as('tasksRequest');
  });

  it('should display loading state while fetching tasks', () => {
    cy.visit('/');
    cy.get('[data-testid="tasks-loading"]').should('be.visible');
    cy.wait('@tasksRequest');
  });

  it('should successfully fetch and display tasks', () => {
    // Mock successful response
    cy.intercept('GET', `${Cypress.env('STRAPI_URL')}/api/tasks`, {
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

    cy.visit('/');
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
    // Mock empty response
    cy.intercept('GET', `${Cypress.env('STRAPI_URL')}/api/tasks`, {
      statusCode: 200,
      body: { data: [] },
    }).as('emptyTasksRequest');

    cy.visit('/');
    cy.wait('@emptyTasksRequest');
    cy.contains('No tasks available.');
  });

  it('should handle API errors gracefully', () => {
    // Mock error response
    cy.intercept('GET', `${Cypress.env('STRAPI_URL')}/api/tasks`, {
      statusCode: 500,
      body: { error: 'Internal Server Error' },
    }).as('failedRequest');

    cy.visit('/');
    cy.wait('@failedRequest');
    cy.get('[data-testid="tasks-error"]').should('be.visible');
    cy.get('[data-testid="tasks-error"]').contains('Failed to fetch tasks');
  });
});
