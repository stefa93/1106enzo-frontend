export default ({ env }) => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
        secret: env('JWT_SECRET'),
      },
      jwtToken: {
        expiresIn: '7d',
      },
    },
  },
});
