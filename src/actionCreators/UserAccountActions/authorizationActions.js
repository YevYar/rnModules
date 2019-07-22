/**
 * This module contains actions related to login.
 *
 * All actions related to login can be located here.
 * For example, there is can be located 'restore password' actions.
 *
 * @format
 * @flow
 */

export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function login(username: string, password: string) {
  return {
    type: LOGIN_REQUESTED,
    username,
    password,
  };
}

export function loginFail() {
  return { type: LOGIN_FAIL };
}

export function loginSuccess(token: string, username: string) {
  return { type: LOGIN_SUCCESS, token, username };
}
