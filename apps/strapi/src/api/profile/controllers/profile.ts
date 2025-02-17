/**
 * Profile controller
 */
export default {
  /**
   * Get the profile of the authenticated user
   * @param {object} ctx - The Koa context object
   */
  async getProfile(ctx) {
    try {
      const { id } = ctx.state.user;

      // Fetch the user with their profile data
      const user = await strapi
        .query('plugin::users-permissions.user')
        .findOne({
          where: { id },
          select: ['username', 'email', 'createdAt'],
        });

      if (!user) {
        return ctx.notFound('User not found');
      }

      return ctx.send({
        data: user,
      });
    } catch (error) {
      return ctx.badRequest('Error fetching profile', { error: error.message });
    }
  },
};
