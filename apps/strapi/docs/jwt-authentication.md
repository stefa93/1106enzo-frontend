# JWT Authentication Configuration

This document outlines the JWT (JSON Web Token) authentication setup in our Strapi application.

## Configuration Overview

JWT authentication is configured in the following files:

- `config/plugins.ts`: JWT plugin configuration
- `.env`: Environment variables for JWT secrets and settings

## Environment Variables

The following environment variables need to be set:

```env
JWT_SECRET=<your-secret-key>  # At least 32 characters
JWT_TOKEN_EXPIRATION=7d       # Token expiration time
```

## JWT Settings

Current configuration:

- Token expiration: 7 days
- Secret key: Configured via environment variable
- Token type: Bearer token

## Protected Routes

To protect an API route, you need to:

1. Enable authentication in the Strapi admin panel:

   - Go to Settings > Roles & Permissions
   - Select the role (e.g., Authenticated)
   - Enable the required permissions

2. Use the token in API requests:
   ```http
   GET /api/protected-route
   Authorization: Bearer <your-jwt-token>
   ```

## Testing Protected Routes

You can test the JWT authentication using the following endpoints:

1. Login to get a token:

   ```http
   POST /api/auth/local
   {
     "identifier": "user@example.com",
     "password": "your-password"
   }
   ```

2. Use the token in subsequent requests:
   ```http
   GET /api/protected-route
   Authorization: Bearer <token-from-login>
   ```

## Security Considerations

1. Always use HTTPS in production
2. Use strong, unique secrets for JWT_SECRET
3. Keep token expiration time reasonable (default: 7 days)
4. Store tokens securely on the client side
5. Implement token refresh mechanism for long-term sessions
