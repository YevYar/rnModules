/**
 * This module contains middleware that executes all functions related to the authorization.
 *
 * All functions related to login can be located here.
 * For example, there is can be located 'restore password' function.
 *
 * @format
 * @flow
 */

import { call, put } from 'redux-saga/effects';

import NavigationService from '../../services/NavigationService';
import ServerApiService from '../../services/ServerApiService';
import {
  loginFail,
  loginSuccess,
} from '../../actionCreators/UserAccountActions/authorizationActions';
import { saveUserAccountData } from '../../services/SecureStore';
import showErrorMessage from '../../utils/showErrorMessage';

const INVALID_DATA_MESSAGE = 'Invalid entered data.';
const LOGIN_FAIL_MESSAGE = "Something has gone wrong. We can't login.";

export function* onLogin(action) {
  const { username, password } = action;
  try {
    const response = yield call(ServerApiService.login, username, password);
    if (response.data.success === true) {
      // NavigationService.navigate("Home");
      NavigationService.goBack();

      const { token } = response.data;

      yield call(saveUserAccountData, token, username);
      ServerApiService.updateHeaders(token);
      yield put(loginSuccess(token, username));
    } else {
      showErrorMessage(INVALID_DATA_MESSAGE);
      yield put(loginFail());
    }
  } catch (error) {
    console.log(`login: ${error}`);
    showErrorMessage(LOGIN_FAIL_MESSAGE);
    yield put(loginFail());
    // throw error;
  }
  /*
  yield login(username, password).then((response) => {
      if (response.data.success === true) {
        // NavigationService.navigate("Home");
        NavigationService.goBack();

        const { token } = response.data;

        saveUserAccountData(token, username);
        updateHeaders(token);
        dispatch(loginSuccess(token, username));
      } else {
        showErrorMessage(INVALID_DATA_MESSAGE);
        dispatch(loginFail());
      }
    })
    .catch((error) => {
      console.log(`login: ${error}`);
      showErrorMessage(LOGIN_FAIL_MESSAGE);
      dispatch(loginFail());
      // throw error;
    }); */
}
