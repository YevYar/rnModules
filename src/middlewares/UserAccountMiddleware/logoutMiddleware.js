/**
 * This module contains middleware that executes all functions related to the logout.
 *
 * @format
 * @flow
 */

import { call, put } from 'redux-saga/effects';

import ServerApiService from '../../services/ServerApiService';
import {
  logoutFail,
  logoutSuccess,
} from '../../actionCreators/UserAccountActions/logoutActions';
import { removeUserAccountData } from '../../services/SecureStore';
import showErrorMessage from '../../utils/showErrorMessage';

const LOGOUT_ERROR_MESSAGE = "We can't log out.";

export function* onLogout() {
  try {
    yield call(removeUserAccountData, 'Token'); // ('Token');
    yield call(removeUserAccountData, 'Username'); // ('Username');
    ServerApiService.updateHeaders('');
    yield put(logoutSuccess());
  } catch (error) {
    console.log(`onLogout: ${error}`);
    showErrorMessage(LOGOUT_ERROR_MESSAGE);
    yield put(logoutFail());
  }
}
