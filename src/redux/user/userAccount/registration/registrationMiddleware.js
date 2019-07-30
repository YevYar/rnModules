/**
 * This module contains middleware that executes all functions related to the registration.
 *
 * All functions related to registration can be located here.
 * For example, there is can be located 'confirm by email' function and so on.
 *
 * @format
 */

import { call, put } from 'redux-saga/effects';

import { registerFail, registerSuccess } from './registrationActions';
import { goBack } from '../../../../services/NavigationService';
import { register, updateHeaders } from '../../../../services/ServerApiService';
import { saveUserAccountData } from '../../../../services/SecureStore';
import showErrorMessage from '../../../../utils/showErrorMessage';

const USERNAME_EXISTED_MESSAGE = 'User with this username has already existed.';
const REGISTER_FAIL_MESSAGE =
  "Something has gone wrong. We can't register you.";
const SAVE_ACCOUNT_DATA_ERROR_MESSAGE =
  "We can't save account data for session recovery.";

export function* onRegister(action) {
  const { password, username } = action;
  try {
    const response = yield call(register, username, password);
    if (response.data.success === true) {
      // NavigationService.navigate("Home");
      goBack();
      goBack();

      const { token } = response.data;

      try {
        yield call(saveUserAccountData, 'Token', token);
        yield call(saveUserAccountData, 'Username', username);
      } catch (error) {
        console.log(`onRegister: ${error}`);
        showErrorMessage(SAVE_ACCOUNT_DATA_ERROR_MESSAGE);
      }

      updateHeaders(token);
      yield put(registerSuccess(token, username));
    } else {
      showErrorMessage(USERNAME_EXISTED_MESSAGE);
      yield put(registerFail());
    }
  } catch (error) {
    console.log(`onRegister: ${error}`);
    showErrorMessage(REGISTER_FAIL_MESSAGE);
    yield put(registerFail());
    // throw error;
  }
}
