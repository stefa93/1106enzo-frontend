import { vi } from 'vitest';
import type {
  ExtendedStrapi,
  RequestOptions,
  ResponseData,
  StrapiQuery,
  StrapiService,
} from './types';

let instance: ExtendedStrapi | null = null;

export async function setupStrapi() {
  if (!instance) {
    const queryMock: StrapiQuery = {
      create: vi.fn().mockImplementation(async (params) => params.data),
      delete: vi.fn().mockImplementation(async () => true),
      findOne: vi.fn().mockImplementation(async () => null),
      deleteMany: vi.fn().mockImplementation(async () => ({ count: 0 })),
    };

    const serviceMock: StrapiService = {
      create: vi.fn().mockImplementation(async (data) => data),
      findOne: vi.fn().mockImplementation(async () => null),
      update: vi.fn().mockImplementation(async (id, data) => ({ id, ...data })),
      delete: vi.fn().mockImplementation(async (id) => ({ id })),
    };

    instance = {
      server: {
        request: vi.fn(),
      },
      query: vi.fn().mockReturnValue(queryMock),
      service: vi.fn().mockReturnValue(serviceMock),
      destroy: vi.fn(),
      config: {
        get: vi.fn(),
      },
    };
  }
  return instance;
}

export async function cleanupStrapi() {
  if (!instance) return;

  // Reset all mocks
  vi.clearAllMocks();
  instance = null;
}

/**
 * Creates a new Strapi instance for testing
 */
export const createStrapiInstance = async (): Promise<ExtendedStrapi> => {
  // For testing purposes, we'll create a mock Strapi instance
  const queryMock: StrapiQuery = {
    create: vi.fn().mockImplementation(async (params) => params.data),
    delete: vi.fn().mockImplementation(async () => true),
    findOne: vi.fn().mockImplementation(async () => null),
    deleteMany: vi.fn().mockImplementation(async () => ({ count: 0 })),
  };

  const serviceMock: StrapiService = {
    create: vi.fn().mockImplementation(async (data) => data),
    findOne: vi.fn().mockImplementation(async () => null),
    update: vi.fn().mockImplementation(async (id, data) => ({ id, ...data })),
    delete: vi.fn().mockImplementation(async (id) => ({ id })),
  };

  const instance: ExtendedStrapi = {
    server: {
      request: vi.fn(),
    },
    query: vi.fn().mockReturnValue(queryMock),
    service: vi.fn().mockReturnValue(serviceMock),
    destroy: vi.fn(),
    config: {
      get: vi.fn(),
    },
  };

  return instance;
};

/**
 * Custom request method for testing
 */
export const strapiRequest = async (
  strapi: ExtendedStrapi,
  method: string,
  path: string,
  options: RequestOptions = {}
): Promise<ResponseData> => {
  const opts = {
    method,
    url: path,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  const response = await strapi.server.request(opts);
  return {
    status: response.status,
    body: response.body,
    headers: response.headers,
  };
};
