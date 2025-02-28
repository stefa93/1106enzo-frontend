// Shared type definitions

// Auth types
export interface User {
  id: string;
  email: string;
  name?: string;
}

// API response types
export interface ApiResponse<T> {
  data: T;
  error?: string;
}

// Common UI types
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}
