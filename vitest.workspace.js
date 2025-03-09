import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';
import { defineWorkspace } from 'vitest/config';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
export default defineWorkspace([
  './apps/strapi/vitest.config.ts',
  './apps/web/vitest.config.ts',
  './apps/strapi/dist/vitest.config.js',
  './apps/strapi/src/admin/vite.config.example.ts',
  {
    plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/writing-tests/test-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook'),
      }),
    ],
    test: {
      name: 'storybook',
      browser: {
        enabled: true,
        headless: true,
        provider: 'playwright',
        instances: [
          {
            browser: 'chromium',
          },
        ],
      },
      setupFiles: ['apps/web/.storybook/vitest.setup.ts'],
    },
  },
  {
    plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/writing-tests/test-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook'),
      }),
    ],
    test: {
      name: 'storybook',
      browser: {
        enabled: true,
        headless: true,
        name: 'chromium',
        provider: 'playwright',
      },
      setupFiles: ['apps/storybook/.storybook/vitest.setup.js'],
    },
  },
]);
