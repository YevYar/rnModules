/**
 * This module contains styles for MapTextButton.
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
    borderRadius: 15,
    borderWidth: 2,
    justifyContent: 'center',
    height: 50,
    padding: 0,
    opacity: 0.6
  },
  text: { fontSize: 18, fontWeight: 'bold' }
});

export default styles;
