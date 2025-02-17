/**
 * Global authentication policy
 */
export default (policyContext, config, { strapi }) => {
  if (policyContext.state.user) {
    // If a session is open, the user is authenticated
    return true;
  }

  return false;
};
