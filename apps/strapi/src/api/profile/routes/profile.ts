export default {
  routes: [
    {
      method: 'GET',
      path: '/profile',
      handler: 'profile.getProfile',
      config: {
        policies: ['global::is-authenticated'],
        auth: {
          scope: ['profile.read'],
        },
      },
    },
  ],
};
