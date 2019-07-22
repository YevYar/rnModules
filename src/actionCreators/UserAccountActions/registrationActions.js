/**
 * This module contains actions related to registration.
 *
 * All actions related to registration can be located here.
 * For example, there is can be located 'confirm by email' actions and so on.
 *
 * @format
 * @flow
 */

export const REGISTER_FAIL = 'REGISTER_FAIL';
export const REGISTER_REQUESTED = 'REGISTER_REQUESTED';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export function register(username: string, password: string) {
  return { type: REGISTER_REQUESTED, username, password };
}

export function registerFail() {
  return { type: REGISTER_FAIL };
}

export function registerSuccess(token: string, username: string) {
  return { type: REGISTER_SUCCESS, token, username };
}
