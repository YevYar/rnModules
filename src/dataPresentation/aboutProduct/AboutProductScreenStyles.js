/**
 * This module contains styles for AboutProductScreen.
 *
 * @format
 */

import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

const {
  mainTextColor,
  mainTextColorOnDarkBG,
  mainDark,
  mainLight,
  screenBackground_3
} = colors;

const styles = StyleSheet.create({
  /** ******************
   * container styles  *
   ******************* */
  page: {
    backgroundColor: screenBackground_3,
    flex: 1
  },
  pageWithoutContent: {
    backgroundColor: screenBackground_3,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },

  /** ****************
   * element styles  *
   ***************** */
  commentsButton: {
    alignSelf: 'stretch',
    backgroundColor: mainLight,
    borderColor: mainDark,
    borderRadius: 10,
    borderWidth: 1,
    elevation: 4,
    margin: 10,
    marginTop: 15,
    padding: 8
  },
  commentsButtonText: {
    color: mainTextColorOnDarkBG,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  description: {
    color: mainTextColor,
    fontSize: 17,
    marginBottom: 0,
    marginLeft: 20,
    marginRight: 15,
    marginTop: 20,
    paddingBottom: 10,
    textAlign: 'justify'
  },
  endLine: {
    borderBottomColor: mainDark,
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10
  },
  name: {
    alignSelf: 'stretch',
    color: mainDark,
    fontSize: 21,
    fontWeight: 'bold',
    margin: 10,
    marginBottom: 0,
    paddingBottom: 10,
    textAlign: 'left'
  },
  placeholderImg: {
    alignSelf: 'center',
    height: 200,
    width: 200
  },
  startLine: {
    borderBottomColor: mainDark,
    borderBottomWidth: 1,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  }
});

export default styles;
