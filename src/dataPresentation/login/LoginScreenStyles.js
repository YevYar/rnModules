/**
 * This module contains styles for LoginScreen.
 *
 * @format
 */

import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

const { additionalTextColor, screenBackground_2 } = colors;

const _transparent = 'transparent';

const styles = StyleSheet.create({
  /** ******************
   * container styles *
   ******************* */
  buttonContainerWithoutDecor: {
    alignItems: 'center',
    backgroundColor: _transparent,
    borderRadius: 10,
    flexDirection: 'row',
    height: 30,
    justifyContent: 'center',
    marginBottom: 15,
    width: 250
  },
  container: {
    alignItems: 'center',
    backgroundColor: screenBackground_2,
    flex: 1,
    justifyContent: 'center'
  },

  /** ****************
   * element styles *
   ***************** */
  additionalButtonText: {
    color: additionalTextColor,
    fontSize: 17
  }
});

export default styles;
