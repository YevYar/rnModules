/**
 * This module contains middleware that executes all functions related to the authorization.
 *
 * All functions related to login can be located here.
 * For example, there is can be located 'restore password' function.
 *
 * @format
 */

import { call, put } from 'redux-saga/effects';

import { goBack } from '../../../../services/NavigationService';
import { login, updateHeaders } from '../../../../services/ServerApiService';
import { loginFail, loginSuccess } from './authorizationActions';
import { saveUserAccountData } from '../../../../services/SecureStore';
import showErrorMessage from '../../../../utils/showErrorMessage';

const ERROR_TITLE = 'Something has gone wrong';
const INVALID_DATA_MESSAGE = 'Invalid entered data.';
const LOGIN_FAIL_MESSAGE = "We can't login.";
const SAVE_ACCOUNT_DATA_ERROR_MESSAGE =
  "We can't save account data for session recovery.";

export function* onLogin(action) {
  const { username, password } = action;
  try {
    const response = yield call(login, username, password);
    if (response.data.success === true) {
      // NavigationService.navigate("Home");
      goBack();

      const { token } = response.data;

      try {
        yield call(saveUserAccountData, 'Token', token);
        yield call(saveUserAccountData, 'Username', username);
      } catch (error) {
        console.log(`onLogin: ${error}`);
        showErrorMessage(ERROR_TITLE, SAVE_ACCOUNT_DATA_ERROR_MESSAGE);
      }

      updateHeaders(token);
      yield put(loginSuccess(token, username));
    } else {
      showErrorMessage(ERROR_TITLE, INVALID_DATA_MESSAGE);
      yield put(loginFail());
    }
  } catch (error) {
    console.log(`onLogin: ${error}`);
    showErrorMessage(LOGIN_FAIL_MESSAGE);
    yield put(loginFail());
    // throw error;
  }
}
