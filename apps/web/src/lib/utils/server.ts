'use server';

/**
 * Server-side utility functions
 */

export async function getServerTime() {
  return new Date().toISOString();
}

export async function validateSession() {
  // Add your session validation logic here
  return true;
}
