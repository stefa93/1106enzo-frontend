import type { ExtendedStrapi } from './types';
import type { TestUser, User, StrapiQuery } from './types';
import jwt from 'jsonwebtoken';
import { vi } from 'vitest';

/**
 * Creates a test user in the database
 */
export const createTestUser = async (
  strapi: ExtendedStrapi,
  userData: TestUser
): Promise<User> => {
  // Mock the user creation
  const user: User = {
    id: 1,
    username: userData.username,
    email: userData.email,
    createdAt: new Date().toISOString(),
    provider: 'local',
    confirmed: true,
    blocked: false,
  };

  // Setup the query mock
  const queryMock: StrapiQuery = {
    create: vi.fn().mockResolvedValue(user),
    delete: vi.fn().mockResolvedValue(true),
    findOne: vi.fn().mockResolvedValue(user),
    deleteMany: vi.fn().mockResolvedValue({ count: 0 }),
  };

  // Setup the mock implementation
  const queryFn = vi.fn().mockReturnValue(queryMock);
  strapi.query = queryFn;

  return user;
};

/**
 * Generates a JWT token for a user
 */
export const generateJWT = (strapi: ExtendedStrapi, user: User): string => {
  // Mock JWT secret
  const jwtSecret = 'test-jwt-secret';
  const configMock = vi.fn().mockReturnValue(jwtSecret);
  strapi.config.get = configMock;

  const jwtToken = jwt.sign(
    {
      id: user.id,
    },
    jwtSecret,
    {
      expiresIn: '7d',
    }
  );

  return jwtToken;
};
