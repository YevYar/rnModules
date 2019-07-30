/**
 * This module contains styles for CommentInput.
 *
 * @format
 */

import { StyleSheet } from 'react-native';

import colors from '../../../../constants/colors';

const { commentInputBG, commentInputBorder, inputBackgroundColor } = colors;

const styles = StyleSheet.create({
  /** ******************
   * container styles *
   ******************* */
  closeIconBlock: {
    position: 'absolute',
    right: 10,
    top: 5
  },
  container: {
    alignItems: 'center',
    backgroundColor: commentInputBG,
    borderColor: commentInputBorder,
    borderRadius: 20,
    borderWidth: 3,
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: 140,
    paddingTop: 7
  },
  inputBlock: {
    alignItems: 'center',
    backgroundColor: inputBackgroundColor,
    borderBottomWidth: 0,
    borderColor: commentInputBorder,
    borderRadius: 15,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    padding: 2,
    paddingLeft: 0
  },

  /** ****************
   * element styles *
   ***************** */
  closeIcon: {
    height: 25,
    width: 25
  },
  input: {
    alignSelf: 'stretch',
    backgroundColor: inputBackgroundColor,
    borderBottomRightRadius: 0,
    borderRadius: 15,
    borderTopRightRadius: 0,
    flex: 1,
    fontSize: 16,
    marginRight: 5,
    padding: 10
  },
  inputSend: {
    height: 52,
    width: 52
  }
});

export default styles;
