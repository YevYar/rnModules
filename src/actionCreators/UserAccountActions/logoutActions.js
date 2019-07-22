/**
 * This module contains actions related to logout.
 *
 * @format
 * @flow
 */

export const LOGOUT_FAIL = 'LOGOUT_FAIL';
export const LOGOUT_REQUESTED = 'LOGOUT_REQUESTED';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export function logout() {
  return { type: LOGOUT_REQUESTED };
}

export function logoutFail() {
  return { type: LOGOUT_FAIL };
}

export function logoutSuccess() {
  return { type: LOGOUT_SUCCESS };
}
