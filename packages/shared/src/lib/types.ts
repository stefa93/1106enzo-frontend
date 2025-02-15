// Common type definitions shared between applications
export interface BaseEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

// Example shared type - remove or modify as needed
export interface User extends BaseEntity {
  email: string;
  name: string;
}
