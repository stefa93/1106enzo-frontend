import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  './apps/strapi/vitest.config.ts',
  './apps/web/vitest.config.ts',
  './apps/strapi/dist/vitest.config.js',
  './apps/strapi/src/admin/vite.config.example.ts',
]);
