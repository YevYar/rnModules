/**
 * This module contains actions related to logout.
 *
 * @format
 */

export const LOGOUT_FAIL = 'LOGOUT_FAIL';
export const LOGOUT_REQUESTED = 'LOGOUT_REQUESTED';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const logout = () => ({ type: LOGOUT_REQUESTED });

export const logoutFail = () => ({ type: LOGOUT_FAIL });

export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });
