// Common types shared across the application

export interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in-progress' | 'completed';
  createdAt: string;
  updatedAt: string;
  userId: string;
} 