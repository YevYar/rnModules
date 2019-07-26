/**
 * This module contains the reducer that combines all reducers related to the userState.
 *
 * @format
 */

import authorizationReducer from './userAccount/authorization/authorizationReducer';
import logoutReducer from './userAccount/logout/logoutReducer';
import registrationReducer from './userAccount/registration/registrationReducer';
import restoreSessionReducer from './sessionStore/restoreSession/restoreSessionReducer';

const reducerFunctions = {
  ...authorizationReducer,
  ...logoutReducer,
  ...registrationReducer,
  ...restoreSessionReducer,
};

export default (state, action) => {
  if (reducerFunctions.hasOwnProperty(action.type)) {
    return reducerFunctions[action.type](state, action);
  }
  return state;
};
