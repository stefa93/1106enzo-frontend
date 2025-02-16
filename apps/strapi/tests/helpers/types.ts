export interface StrapiService {
  create(params: {
    data: Record<string, unknown>;
  }): Promise<Record<string, unknown>>;
  findOne(params: { id: number }): Promise<Record<string, unknown> | null>;
  update(params: {
    id: number;
    data: Record<string, unknown>;
  }): Promise<Record<string, unknown>>;
  delete(params: { id: number }): Promise<Record<string, unknown>>;
}

export interface StrapiQuery {
  findOne(params: {
    where: Record<string, unknown>;
  }): Promise<Record<string, unknown> | null>;
  create(params: {
    data: Record<string, unknown>;
  }): Promise<Record<string, unknown>>;
  deleteMany(params: {
    where: Record<string, unknown>;
  }): Promise<{ count: number }>;
}

export interface ExtendedStrapi {
  service(uid: string): StrapiService;
  query(uid: string): StrapiQuery;
  config: {
    get(path: string): unknown;
  };
}
