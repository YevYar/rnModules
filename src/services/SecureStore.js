/**
 * This service works with secure store.
 *
 * @format
 */

import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';

export const removeUserAccountData = key => RNSecureStorage.remove(key);

export const getUserAccountData = key => RNSecureStorage.get(key);

export const saveUserAccountData = (key, value) =>
  RNSecureStorage.set(key, value, {
    accessible: ACCESSIBLE.WHEN_UNLOCKED,
  });
