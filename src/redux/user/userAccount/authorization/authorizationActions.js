/**
 * This module contains actions related to login.
 *
 * All actions related to login can be located here.
 * For example, there is can be located 'restore password' actions.
 *
 * @format
 */

export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const login = (username, password) => ({
  type: LOGIN_REQUESTED,
  username,
  password
});

export const loginFail = () => ({ type: LOGIN_FAIL });

export const loginSuccess = (token, username) => ({
  type: LOGIN_SUCCESS,
  token,
  username
});
