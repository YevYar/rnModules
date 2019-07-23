/**
 * This module contains actions related to restoring last session.
 *
 * All actions related to restoring some data
 * between app working sessions can be located here.
 *
 * @format
 * @flow
 */

export const RESTORE_SESSION_FAIL = 'RESTORE_SESSION_FAIL';
export const RESTORE_SESSION_REQUESTED = 'RESTORE_SESSION_REQUESTED';
export const RESTORE_SESSION_SUCCESS = 'RESTORE_SESSION_SUCCESS';

export function restoreSession(...callbacks: Array<Function>) {
  return { type: RESTORE_SESSION_REQUESTED, callbacks };
}

export function restoreSessionFail() {
  return { type: RESTORE_SESSION_FAIL };
}

export function restoreSessionSuccess(token: string, username: string) {
  return { type: RESTORE_SESSION_SUCCESS, token, username };
}
