import type { ExtendedStrapi } from './types';

export const SetupUser = {
  username: 'testuser',
  email: 'test@test.com',
  provider: 'local',
  password: 'testPass123',
  confirmed: true,
  blocked: false,
};

export async function createTestUser(strapi: ExtendedStrapi) {
  const defaultRole = await strapi
    .query('plugin::users-permissions.role')
    .findOne({ where: { type: 'authenticated' } });

  const testUser = await strapi.query('plugin::users-permissions.user').create({
    data: {
      ...SetupUser,
      role: defaultRole.id,
    },
  });

  return testUser;
}

export default {
  SetupUser,
  createTestUser,
};
