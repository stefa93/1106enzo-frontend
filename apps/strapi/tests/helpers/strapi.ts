import type { ExtendedStrapi } from './types';
import { vi } from 'vitest';

let instance: ExtendedStrapi | null = null;

export async function setupStrapi() {
  if (!instance) {
    const mockService = {
      create: vi.fn(),
      findOne: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    };

    const mockQuery = {
      findOne: vi.fn(),
      create: vi.fn(),
      deleteMany: vi.fn(),
    };

    // Create a mock Strapi instance
    instance = {
      service: () => mockService,
      query: () => mockQuery,
      config: {
        get: vi.fn(),
      },
    } as ExtendedStrapi;
  }
  return instance;
}

export async function cleanupStrapi() {
  if (!instance) return;

  // Reset all mocks
  vi.clearAllMocks();
  instance = null;
}

export default {
  setupStrapi,
  cleanupStrapi,
};
