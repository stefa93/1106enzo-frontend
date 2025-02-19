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
    },
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
