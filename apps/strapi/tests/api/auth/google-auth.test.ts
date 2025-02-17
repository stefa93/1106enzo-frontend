import { describe, it, expect, beforeAll } from 'vitest';
import { createStrapiInstance } from '../../helpers/strapi';
import * as dotenv from 'dotenv';
import path from 'node:path';
import type { ExtendedStrapi } from '../../helpers/types';

interface GoogleProviderConfig {
  enabled: boolean;
  icon: string;
  key: string;
  secret: string;
  callback: string;
  scope: string[];
}

interface ProvidersConfig {
  google: GoogleProviderConfig;
}

let strapi: ExtendedStrapi;

beforeAll(async () => {
  // Load test environment variables
  dotenv.config({
    path: path.resolve(__dirname, '../../../.env.test'),
  });
  strapi = await createStrapiInstance();
});

describe('Google OAuth Configuration', () => {
  it('should have Google provider enabled', () => {
    const providersConfig = strapi.config.get(
      'plugin.users-permissions.config.providers'
    ) as ProvidersConfig;
    expect(providersConfig).toBeDefined();
    expect(providersConfig.google).toBeDefined();
    expect(providersConfig.google.enabled).toBe(true);
  });

  it('should have required Google OAuth environment variables', () => {
    const { env } = process;
    expect(env.GOOGLE_CLIENT_ID).toBeDefined();
    expect(env.GOOGLE_CLIENT_SECRET).toBeDefined();
    expect(env.GOOGLE_CALLBACK_URL).toBeDefined();
  });

  it('should have correct Google OAuth configuration', () => {
    const googleConfig = strapi.config.get(
      'plugin.users-permissions.config.providers.google'
    ) as GoogleProviderConfig;
    expect(googleConfig).toMatchObject({
      enabled: true,
      icon: 'google',
      scope: ['email', 'profile'],
    });
  });
});
