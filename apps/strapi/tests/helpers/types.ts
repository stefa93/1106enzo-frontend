// Type definitions for Strapi test helpers
export interface TestUser {
  username: string;
  email: string;
  password: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  createdAt?: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
}

export interface RequestOptions {
  method?: string;
  url?: string;
  headers?: Record<string, string>;
  body?: unknown;
}

export interface ProfileResponse {
  data: User;
  message?: string;
}

export interface ErrorResponse {
  message: string;
  error?: unknown;
}

export type ResponseBody = ProfileResponse | ErrorResponse;

export interface ResponseData {
  status: number;
  body: ResponseBody;
  headers: Record<string, string>;
}

export interface StrapiQueryParams {
  where?: Record<string, unknown>;
  data?: Record<string, unknown>;
  select?: string[];
}

export interface StrapiQuery {
  create: (params: {
    data: Record<string, unknown>;
  }) => Promise<Record<string, unknown>>;
  delete: (params: { where: Record<string, unknown> }) => Promise<boolean>;
  findOne: (params: {
    where: Record<string, unknown>;
  }) => Promise<Record<string, unknown> | null>;
  deleteMany: (params: {
    where: Record<string, unknown>;
  }) => Promise<{ count: number }>;
}

export interface StrapiService {
  create: (data: Record<string, unknown>) => Promise<Record<string, unknown>>;
  findOne: (id: number) => Promise<Record<string, unknown> | null>;
  update: (
    id: number,
    data: Record<string, unknown>
  ) => Promise<Record<string, unknown>>;
  delete: (id: number) => Promise<Record<string, unknown>>;
}

export interface StrapiConfig {
  get: (path: string) => unknown;
}

export interface StrapiServer {
  request: (options: RequestOptions) => Promise<ResponseData>;
}

export interface ExtendedStrapi {
  server: StrapiServer;
  query: (uid: string) => StrapiQuery;
  service: (uid: string) => StrapiService;
  destroy: () => Promise<void>;
  config: StrapiConfig;
}
