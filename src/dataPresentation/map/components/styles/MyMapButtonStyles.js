/**
 * This module contains styles for MyMapButton.
 *
 * @format
 */

import { StyleSheet } from 'react-native';

import colors from '../../../../constants/colors';

const { additionalDark } = colors;

const styles = StyleSheet.create({
  /** *****************
   * container styles *
   ****************** */
  container: { marginTop: 5 },

  /** ****************
   * elements styles *
   ***************** */
  button: {
    borderColor: additionalDark,
    borderWidth: 2,
    justifyContent: 'center',
    height: 50,
    maxWidth: 50,
    padding: 0,
    width: 50
  },
  icon: { marginRight: 9 }
});

export default styles;
