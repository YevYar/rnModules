/**
 * This module contains middleware that executes all functions related to the logout.
 *
 * @format
 */

import { call, put } from 'redux-saga/effects';

import { logoutFail, logoutSuccess } from './logoutActions';
import { removeUserAccountData } from '../../../../services/SecureStore';
import { updateHeaders } from '../../../../services/ServerApiService';
import showErrorMessage from '../../../../utils/showErrorMessage';

const LOGOUT_ERROR_MESSAGE = "We can't log out.";

export function* onLogout() {
  try {
    yield call(removeUserAccountData, 'Token'); // ('Token');
    yield call(removeUserAccountData, 'Username'); // ('Username');
    updateHeaders('');
    yield put(logoutSuccess());
  } catch (error) {
    console.log(`onLogout: ${error}`);
    showErrorMessage(LOGOUT_ERROR_MESSAGE);
    yield put(logoutFail());
  }
}
