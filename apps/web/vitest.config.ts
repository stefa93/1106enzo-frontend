import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary', 'json', 'cobertura', 'html'],
      reportsDirectory: './coverage',
      exclude: [
        ...(configDefaults.coverage.exclude || []),
        'node_modules/**',
        'src/test/**',
        '.next/**',
        '**/*.config.*',
        '**/pages/_document.tsx',
        'coverage/**',
      ],
      include: ['src/**/*.{ts,tsx}'],
    },
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
