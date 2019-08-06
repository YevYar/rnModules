/**
 * This module contains styles for CommentsScreen.
 *
 * @format
 */

import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

const { mainLight, screenBackground } = colors;

const styles = StyleSheet.create({
  /** ******************
   * container styles *
   ******************* */
  addButtonBlock: {
    borderColor: mainLight,
    borderRadius: 49,
    borderWidth: 5,
    bottom: 30,
    elevation: 8,
    right: 20,
    position: 'absolute'
  },
  list: { flex: 1 },
  page: {
    backgroundColor: screenBackground,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },

  /** ****************
   * element styles *
   ***************** */
  addButton: {
    height: 75,
    width: 75
  }
});

export default styles;
