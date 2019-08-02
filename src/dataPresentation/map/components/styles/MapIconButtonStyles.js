/**
 * This module contains styles for MapIconButton.
 *
 * @format
 */

import { StyleSheet } from 'react-native';

import colors from '../../../../constants/colors';

const { additionalDark, mainLight } = colors;

const styles = StyleSheet.create({
  /** *****************
   * container styles *
   ****************** */
  container: { marginTop: 5 },

  /** ****************
   * elements styles *
   ***************** */
  button: {
    alignItems: 'center',
    backgroundColor: mainLight,
    borderColor: additionalDark,
    borderRadius: 5,
    borderWidth: 2,
    justifyContent: 'center',
    height: 50,
    maxWidth: 50,
    padding: 0,
    width: 50
  }
});

export default styles;
