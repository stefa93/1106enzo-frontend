import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    exclude: ['node_modules', '.tmp', '.cache', 'dist'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary', 'json', 'html', 'lcov'],
      exclude: [
        'node_modules/**',
        'tests/**',
        '.tmp/**',
        '.cache/**',
        'dist/**',
        'coverage/**',
        '**/*.config.*',
      ],
      include: ['src/**/*.{js,ts}'],
      reportsDirectory: './coverage',
    },
    include: ['src/**/*.{test,spec}.{js,ts}', 'tests/**/*.{test,spec}.{js,ts}'],
  },
  resolve: {
    alias: {
      dotenv: 'dotenv',
    },
  },
});
