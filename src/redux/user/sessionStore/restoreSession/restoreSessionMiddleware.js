/**
 * This module contains middleware that executes all functions
 * related to the restoring access token and username.
 *
 * All functions related to restoring some data
 * between app working sessions can be located here.
 *
 * @format
 */

import { call, put } from 'redux-saga/effects';

import ServerApiService from '../../../../services/ServerApiService';
import { getUserAccountData } from '../../../../services/SecureStore';
import {
  restoreSessionFail,
  restoreSessionSuccess,
} from './restoreSessionActions';

const { updateHeaders } = ServerApiService;

export function* onRestoreSession(action) {
  const { callbacks } = action;

  try {
    let token;
    let username;
    try {
      token = yield call(getUserAccountData, 'Token');
      username = yield call(getUserAccountData, 'Username');
    } catch (error) {
      console.log(`onRestoreSession: ${error}`);
      yield put(restoreSessionFail());
      for (const item of callbacks) {
        yield put(item());
      }
      return;
    }

    if (token.length !== 0 && username.length !== 0) {
      updateHeaders(token);
      yield put(restoreSessionSuccess(token, username));
      for (const item of callbacks) {
        yield put(item());
      }
    } else throw new Error('Username or token restore error');
  } catch (error) {
    console.log(`onRestoreSession: ${error}`);
    yield put(restoreSessionFail());
    for (const item of callbacks) {
      yield put(item());
    }
  }
}
