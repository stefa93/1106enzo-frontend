/// <reference types="cypress" />
/// <reference types="cypress-axe" />

/**
 * E2E tests for Button component
 */
describe('Actions/Button', () => {
  const visitButtonStory = (storyName: string) => {
    cy.visitStory('Actions/Button', storyName);
    cy.waitForStoryToLoad('button');
  };

  describe('Functionality Tests', () => {
    it('renders primary button correctly', () => {
      visitButtonStory('Primary');
      cy.get('button')
        .contains('Primary Button')
        .should('be.visible')
        .and('have.class', 'bg-brand')
        .and('not.be.disabled')
        .click();
    });

    it('renders disabled button correctly', () => {
      visitButtonStory('Disabled');
      cy.get('button')
        .contains('Disabled Button')
        .should('be.disabled')
        .and('have.attr', 'aria-disabled', 'true')
        .and('have.class', 'opacity-50');
    });

    it('renders loading button correctly', () => {
      // TODO: Implement loading button test
    });
  });

  describe('Variants Tests', () => {
    const variants = [
      { story: 'Primary', text: 'Primary Button', expectedClass: 'bg-brand' },
      { story: 'Secondary', text: 'Secondary Button', expectedClass: 'bg-brand-100' },
      { story: 'Outline', text: 'Outline Button', expectedClass: 'border-2' },
    ];

    variants.forEach(({ story, text, expectedClass }) => {
      it(`renders ${story} variant with correct styles`, () => {
        visitButtonStory(story);
        cy.get('button').contains(text).should('have.class', expectedClass);
      });
    });
  });

  describe('Size Tests', () => {
    const sizes = [
      { story: 'Small', text: 'Small Button', expectedClass: 'text-sm' },
      { story: 'Primary', text: 'Primary Button', expectedClass: 'text-base' }, // Reusing "Primary" story for medium
      { story: 'Large', text: 'Large Button', expectedClass: 'text-lg' },
    ];

    sizes.forEach(({ story, text, expectedClass }) => {
      it(`renders ${story} size correctly`, () => {
        visitButtonStory(story);
        cy.get('button').contains(text).should('have.class', expectedClass);
      });
    });
  });

  describe('Accessibility Tests', () => {
    const a11yRules = {
      rules: {
        'color-contrast': { enabled: true },
        'aria-allowed-attr': { enabled: true },
        'aria-required-attr': { enabled: true },
      },
    };

    it('passes a11y tests for primary button', () => {
      visitButtonStory('Primary');
      cy.injectAxe();
      cy.checkA11y('button', a11yRules);
    });

    it('passes a11y tests for disabled button', () => {
      visitButtonStory('Disabled');
      cy.injectAxe();
      cy.checkA11y('button', a11yRules);
    });
  });
});
