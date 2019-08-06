/**
 * This module contains styles for LRErrorMessage.
 *
 * @format
 */

import { StyleSheet } from 'react-native';

import colors from '../../../../constants/colors';

const { errorTextColor } = colors;

const styles = StyleSheet.create({
  /** ******************
   * container styles *
   ******************* */
  errorTextWrapper: {
    flexDirection: 'row',
    paddingLeft: 3,
    paddingRight: 3
  },

  /** ****************
   * element styles *
   ***************** */
  error: {
    color: errorTextColor,
    flexWrap: 'wrap',
    fontSize: 14,
    marginTop: -30,
    minHeight: 10,
    textAlign: 'center'
  }
});

export default styles;
