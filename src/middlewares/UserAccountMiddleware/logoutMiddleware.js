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
  } catch (err) {
    console.log(err);
    showErrorMessage(LOGOUT_ERROR_MESSAGE);
    yield put(logoutFail());
  }
  /* const tokenRemover =
  tokenRemover.then();
  tokenRemover.catch((err) => {
    console.log(err);
    showErrorMessage(LOGOUT_ERROR_MESSAGE);
    yield put(logoutFail());
  }); */

  /* return (dispatch: Function) => {
    removeUserAccountData(
      'Token',
      () => removeUserAccountData(
        'Username',
        () => {
          updateHeaders('');
          dispatch(logoutSuccess());
        },
        (err) => {
          console.log(err);
          showErrorMessage(LOGOUT_ERROR_MESSAGE);
          dispatch(logoutFail());
        },
      ),
      (err) => {
        console.log(err);
        showErrorMessage(LOGOUT_ERROR_MESSAGE);
        dispatch(logoutFail());
      },
    );
  }; */
}
