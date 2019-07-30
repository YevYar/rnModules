/**
 * This module contains styles for LRInput.
 *
 * @format
 */

import { StyleSheet } from 'react-native';

import colors from '../../../../constants/colors';

const {
  inputBackgroundColor,
  inputBorderBottomColor
  /* inputBorderColor */
} = colors;

const styles = StyleSheet.create({
  /** ******************
   * container styles *
   ******************* */
  inputContainer: {
    alignItems: 'center',
    backgroundColor: inputBackgroundColor,
    borderBottomColor: inputBorderBottomColor,
    borderBottomWidth: 1,
    borderRadius: 7,
    flexDirection: 'row',
    height: 45,
    marginBottom: 30,
    width: 250
  },

  /** ****************
   * element styles *
   ***************** */
  inputIcon: {
    height: 30,
    justifyContent: 'center',
    marginLeft: 15,
    width: 30
  },
  input: {
    borderBottomColor: inputBorderBottomColor /* inputBorderColor */,
    flex: 1,
    fontSize: 16,
    height: 45,
    marginLeft: 16
  }
});

export default styles;
