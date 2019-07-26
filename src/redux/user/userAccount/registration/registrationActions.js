/**
 * This module contains actions related to registration.
 *
 * All actions related to registration can be located here.
 * For example, there is can be located 'confirm by email' actions and so on.
 *
 * @format
 */

export const REGISTER_FAIL = 'REGISTER_FAIL';
export const REGISTER_REQUESTED = 'REGISTER_REQUESTED';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const register = (username, password) => ({
  type: REGISTER_REQUESTED,
  username,
  password,
});

export const registerFail = () => ({ type: REGISTER_FAIL });

export const registerSuccess = (token, username) => ({
  type: REGISTER_SUCCESS,
  token,
  username,
});
