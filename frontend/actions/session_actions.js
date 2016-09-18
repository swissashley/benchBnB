const SessionActions = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
    SIGNUP: "SIGNUP",
    RECEIVE_CURRENTUSER: "RECEIVE_CURRENTUSER",
    RECEIVE_ERRORS: "RECEIVE_ERRORS",
    login: (user) => ({
      type: SessionActions.LOGIN,
      user
    }),
    logout: () => ({
      type: SessionActions.LOGOUT
    }),
    signUp: (user) => ({
      type: SessionActions.SIGNUP,
      user
    }),
    receiveCurrentUser: (user) => ({
      type: SessionActions.RECEIVE_CURRENTUSER,
      user
    }),
    receiveErrors: (errors) => ({
      type: SessionActions.RECEIVE_ERRORS,
      errors
    })

  };
window.SessionActions = SessionActions;
export default SessionActions;
