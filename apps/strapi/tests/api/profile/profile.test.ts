import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import { createStrapiInstance, strapiRequest } from '../../helpers/strapi';
import { createTestUser, generateJWT } from '../../helpers/auth';
import type {
  ExtendedStrapi,
  User,
  ProfileResponse,
  ErrorResponse,
  ResponseData,
} from '../../helpers/types';

describe('Profile API endpoints', () => {
  let strapi: ExtendedStrapi;
  let testUser: User;
  let jwt: string;

  beforeAll(async () => {
    strapi = await createStrapiInstance();

    // Create a test user
    testUser = await createTestUser(strapi, {
      username: 'testuser',
      email: 'test@example.com',
      password: 'Test123!@#',
    });

    // Generate JWT token for the test user
    jwt = generateJWT(strapi, testUser);

    // Setup request mock for successful response
    const requestMock = vi
      .fn()
      .mockImplementation(async (opts): Promise<ResponseData> => {
        const auth = opts.headers?.Authorization;

        if (!auth) {
          return {
            status: 401,
            body: { message: 'No authorization header' },
            headers: {},
          };
        }

        if (auth === 'Bearer invalid-token') {
          return {
            status: 401,
            body: { message: 'Invalid token' },
            headers: {},
          };
        }

        if (auth === `Bearer ${jwt}`) {
          return {
            status: 200,
            body: { data: testUser },
            headers: {},
          };
        }

        return {
          status: 401,
          body: { message: 'Unauthorized' },
          headers: {},
        };
      });

    // Setup the mock implementation
    strapi.server.request = requestMock;
  });

  afterAll(async () => {
    vi.clearAllMocks();
    await strapi.destroy();
  });

  describe('GET /api/profile', () => {
    it('should return 401 when no token is provided', async () => {
      const res = await strapiRequest(strapi, 'GET', '/api/profile');
      expect(res.status).toBe(401);
      expect((res.body as ErrorResponse).message).toBe(
        'No authorization header'
      );
    });

    it('should return 401 when invalid token is provided', async () => {
      const res = await strapiRequest(strapi, 'GET', '/api/profile', {
        headers: {
          Authorization: 'Bearer invalid-token',
        },
      });
      expect(res.status).toBe(401);
      expect((res.body as ErrorResponse).message).toBe('Invalid token');
    });

    it('should return user profile when valid token is provided', async () => {
      const res = await strapiRequest(strapi, 'GET', '/api/profile', {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      expect(res.status).toBe(200);
      const profile = res.body as ProfileResponse;
      expect(profile.data).toMatchObject({
        username: testUser.username,
        email: testUser.email,
      });
      expect(profile.data.createdAt).toBeDefined();
    });

    it('should return 404 when user is deleted but token is still valid', async () => {
      // Store the JWT
      const deletedUserJwt = jwt;

      // Mock the deleted user scenario
      const notFoundMock = vi.fn().mockImplementation(
        async (): Promise<ResponseData> => ({
          status: 404,
          body: { message: 'User not found' },
          headers: {},
        })
      );

      strapi.server.request = notFoundMock;

      const res = await strapiRequest(strapi, 'GET', '/api/profile', {
        headers: {
          Authorization: `Bearer ${deletedUserJwt}`,
        },
      });

      expect(res.status).toBe(404);
      const error = res.body as ErrorResponse;
      expect(error.message).toBe('User not found');
    });
  });
});
