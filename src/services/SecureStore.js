/**
 * This service works with secure store.
 *
 * @format
 * @flow
 */

import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';

export function removeUserAccountData(key: string) {
  return RNSecureStorage.remove(key);
}

export function getUserAccountData(key) {
  return RNSecureStorage.get(key);
}

export function saveUserAccountData(key: string, value: any) {
  return RNSecureStorage.set(key, value, {
    accessible: ACCESSIBLE.WHEN_UNLOCKED,
  });
}
