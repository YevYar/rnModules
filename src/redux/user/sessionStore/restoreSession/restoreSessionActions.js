/**
 * This module contains actions related to restoring last session.
 *
 * All actions related to restoring some data
 * between app working sessions can be located here.
 *
 * @format
 */

export const RESTORE_SESSION_FAIL = 'RESTORE_SESSION_FAIL';
export const RESTORE_SESSION_REQUESTED = 'RESTORE_SESSION_REQUESTED';
export const RESTORE_SESSION_SUCCESS = 'RESTORE_SESSION_SUCCESS';

export const restoreSession = (...callbacks) => ({
  type: RESTORE_SESSION_REQUESTED,
  callbacks
});

export const restoreSessionFail = () => ({ type: RESTORE_SESSION_FAIL });

export const restoreSessionSuccess = (token, username) => ({
  type: RESTORE_SESSION_SUCCESS,
  token,
  username
});
