describe('Button Component (Storybook)', () => {
  beforeEach(() => {
    cy.visitStory('ui-button--primary');
    // Wait for Storybook to be ready
    cy.get('#storybook-root', { timeout: 20000 }).should('be.visible');
  });

  it('should render the primary button correctly', () => {
    cy.get('#storybook-root button')
      .first()
      .should('be.visible')
      .should('have.class', 'bg-primary')
      .should('have.class', 'text-primary-foreground');
  });

  it('should render different variants', () => {
    // Test secondary variant
    cy.visitStory('ui-button--secondary');
    cy.get('#storybook-root button')
      .first()
      .should('be.visible')
      .should('have.class', 'bg-secondary')
      .should('have.class', 'text-secondary-foreground');

    // Test ghost variant
    cy.visitStory('ui-button--ghost');
    cy.get('#storybook-root button')
      .first()
      .should('be.visible')
      .should('have.class', 'hover:bg-accent')
      .should('have.class', 'hover:text-accent-foreground');
  });

  it('should render different sizes', () => {
    // Test small size
    cy.visitStory('ui-button--small');
    cy.get('#storybook-root button')
      .first()
      .should('be.visible')
      .should('have.class', 'h-9')
      .should('have.class', 'px-3')
      .should('have.class', 'text-sm');

    // Test large size
    cy.visitStory('ui-button--large');
    cy.get('#storybook-root button')
      .first()
      .should('be.visible')
      .should('have.class', 'h-11')
      .should('have.class', 'px-8');
  });

  // New test cases
  it('should show loading state correctly', () => {
    cy.visitStory('ui-button--loading');
    cy.get('#storybook-root button')
      .first()
      .within(() => {
        cy.get('span')
          .should('have.class', 'animate-spin')
          .should('have.class', 'border-t-transparent');
        cy.contains('Loading Button');
      });
  });

  it('should handle disabled state correctly', () => {
    cy.visitStory('ui-button--disabled');
    cy.get('#storybook-root button')
      .first()
      .should('be.disabled')
      .should('have.class', 'disabled:pointer-events-none')
      .should('have.class', 'disabled:opacity-50');
  });

  it('should handle long text appropriately', () => {
    cy.visitStory('ui-button--long-text');
    cy.get('#storybook-root button')
      .first()
      .should('be.visible')
      .invoke('text')
      .should('have.length.gt', 50);

    // Check if text is contained within button bounds
    cy.get('#storybook-root button')
      .first()
      .then(($btn) => {
        const btnWidth = $btn[0].offsetWidth;
        const textWidth = $btn[0].scrollWidth;
        expect(textWidth).to.be.lte(btnWidth);
      });
  });

  it('should render with icon correctly', () => {
    cy.visitStory('ui-button--with-icon');
    cy.get('#storybook-root button')
      .first()
      .within(() => {
        cy.get('svg')
          .should('be.visible')
          .should('have.class', 'mr-2')
          .should('have.class', 'h-4')
          .should('have.class', 'w-4');
        cy.contains('Download');
      });
  });

  it('should handle click events', () => {
    cy.visitStory('ui-button--interactive-button');
    const stub = cy.stub();
    cy.on('window:alert', stub);

    cy.get('#storybook-root button')
      .first()
      .click()
      .then(() => {
        expect(stub).to.be.calledWith('Button clicked!');
      });
  });

  it('should maintain focus styles', () => {
    cy.get('#storybook-root button')
      .first()
      .focus()
      .should('have.class', 'focus-visible:outline-none')
      .should('have.class', 'focus-visible:ring-2')
      .should('have.class', 'focus-visible:ring-offset-2');
  });
});
