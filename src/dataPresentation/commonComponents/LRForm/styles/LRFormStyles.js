/**
 * This module contains styles for LRForm.
 *
 * @format
 */

import { StyleSheet } from 'react-native';

import colors from '../../../../constants/colors';

const { additionalDark, mainTextColorOnDarkBG } = colors;

const styles = StyleSheet.create({
  /** ******************
   * container styles *
   ******************* */
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: additionalDark,
    borderRadius: 10,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
    marginBottom: 15,
    width: 250
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 70
  },

  /** ****************
   * element styles *
   ***************** */
  buttonText: {
    color: mainTextColorOnDarkBG,
    fontSize: 20
  }
});

export default styles;
