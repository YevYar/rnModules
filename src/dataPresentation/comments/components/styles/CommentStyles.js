/**
 * This module contains styles for Comment.
 *
 * @format
 */

import { StyleSheet } from 'react-native';

import colors from '../../../../constants/colors';

const {
  listElementBackground,
  listElementBorder,
  mainDark,
  mainTextColor
} = colors;

const styles = StyleSheet.create({
  /** ******************
   * container styles *
   ******************* */
  container: {
    alignItems: 'flex-start',
    backgroundColor: listElementBackground,
    borderColor: listElementBorder,
    borderRadius: 10,
    borderWidth: 1,
    elevation: 4,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 3,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 7,
    minHeight: 80,
    padding: 5
  },
  text: {
    color: mainTextColor,
    fontSize: 16,
    marginTop: 7,
    textAlign: 'justify'
  },
  title: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7
  },

  /** ****************
   * element styles *
   ***************** */
  name: {
    color: mainDark,
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold'
  },
  time: {
    color: mainTextColor,
    flex: 1,
    fontSize: 13.5,
    fontStyle: 'italic',
    textAlign: 'right'
  }
});

export default styles;
