import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: process.env.FRONTEND_URL || 'http://localhost:3000', // Default to frontend
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    video: false,
    screenshotOnRunFailure: true,
    testIsolation: true,
    chromeWebSecurity: false, // Allow cross-origin requests during testing
    env: {
      FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:3000',
      STRAPI_URL: process.env.STRAPI_URL || 'http://localhost:1337',
      API_TOKEN: process.env.STRAPI_API_TOKEN,
      STORYBOOK_URL: process.env.STORYBOOK_URL || 'http://localhost:6006', // Add Storybook URL
    },
    setupNodeEvents(_on, config) {
      // Override baseUrl for Storybook tests
      if (config.spec && typeof config.spec === 'string' && config.spec.includes('storybook')) {
        config.baseUrl = config.env.STORYBOOK_URL;
      }
      return config;
    },
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    specPattern: 'src/**/*.stories.{js,jsx,ts,tsx}', // Add pattern for story files
  },
});
