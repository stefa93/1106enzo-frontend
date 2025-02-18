/**
 * Global authentication policy
 */
export default (policyContext, _config) => {
  if (policyContext.state.user) {
    // If a session is open, the user is authenticated
    return true;
  }

  return false;
};
