/**
 * This service works with secure store.
 *
 * @format
 * @flow
 */

// import RNSecureKeyStore, { ACCESSIBLE } from "react-native-secure-key-store";

import ServerApiService from './ServerApiService';
import showErrorMessage from '../utils/showErrorMessage';

const SAVE_ACCOUNT_DATA_ERROR_MESSAGE =
  "We can't save account data for session recovery.";

export function removeUserAccountData(key: string) {
  return 0;
  // return RNSecureKeyStore.remove(key).then(() => onSuccess(), err => onFail(err));
}

export function getUserAccountData(key) {
  return 0;
  /** **************************************************************************
   * RNSecureKeyStore.get(key) gets an account data from an encrypted storage *
   *************************************************************************** */
  // return RNSecureKeyStore.get(key).then(() => onSuccess(), err => onFail(err));
}

export function saveUserAccountData(token: String, username: string) {
  return 0;
  /** ****************************************************************************************************
   * RNSecureKeyStore.set(key, value) saves an account data for session restore in an encrypted storage *
   ***************************************************************************************************** */
  /* RNSecureKeyStore.set("Token", token, {
    accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY
  }).then(
    res => {
      console.log("saveUserAccountData: " + res);
      RNSecureKeyStore.set("Username", username, {
        accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY
      }).then(
        res => console.log("saveUserAccountData: " + res),
        err => {
          console.log("saveUserAccountData error: " + err);
          showErrorMessage(SAVE_ACCOUNT_DATA_ERROR_MESSAGE);
        }
      );
    },
    err => {
      console.log("saveUserAccountData error: " + err);
      showErrorMessage(SAVE_ACCOUNT_DATA_ERROR_MESSAGE);
    }
  ); */
}
