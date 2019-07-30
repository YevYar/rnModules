/**
 * This module contains styles for ProductScreen.
 *
 * @format
 */

import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

const { screenBackground } = colors;

const styles = StyleSheet.create({
  /** ******************
   * container styles *
   ******************* */
  list: { flex: 1 },
  page: {
    backgroundColor: screenBackground,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
});

export default styles;
