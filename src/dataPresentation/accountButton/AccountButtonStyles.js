/**
 * This module contains styles for AccountButton.
 *
 * @format
 */

import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

const {
  accountMenuColor,
  additionalTextColor,
  navHeaderElementsColor
} = colors;

const styles = StyleSheet.create({
  /** ******************
   * container styles *
   ******************* */
  container: {
    backgroundColor: navHeaderElementsColor,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    height: 50,
    minWidth: 54,
    padding: 4,
    paddingLeft: 5,
    paddingRight: 3
  },

  /** ****************
   * element styles *
   ***************** */
  anchor: { backgroundColor: accountMenuColor },
  image: { flex: 1 },
  logout: {
    color: accountMenuColor,
    fontSize: 16.5,
    width: 100
  },
  name: {
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
  text: {
    color: additionalTextColor,
    flex: 1,
    fontSize: 15.5,
    textAlign: 'center'
  }
});

export default styles;
