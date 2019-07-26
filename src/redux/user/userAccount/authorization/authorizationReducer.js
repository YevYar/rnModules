/**
 * This module contains the reducer that updates the store
 * in the result of the actions related to login.
 *
 * @format
 */

const loginSuccess = (state, action) => ({
  ...state,
  appState: { ...state.appState, isLogged: true },
  domainData: {
    ...state.domainData,
    token: action.token,
    username: action.username,
  },
});

export default { LOGIN_SUCCESS: loginSuccess };
