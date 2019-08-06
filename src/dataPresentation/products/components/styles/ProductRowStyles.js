/**
 * This module contains styles for ProductRow.
 *
 * @format
 */

import { StyleSheet } from 'react-native';

import colors from '../../../../constants/colors';

const { listElementBackground, listElementBorder, mainTextColor } = colors;

const styles = StyleSheet.create({
  /** ******************
   * container styles *
   ******************* */
  container: {
    alignItems: 'stretch',
    backgroundColor: listElementBackground,
    borderColor: listElementBorder,
    borderRadius: 10,
    borderWidth: 1,
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 140,
    padding: 5
  },
  descriptionBlock: {
    borderLeftColor: listElementBorder,
    borderLeftWidth: 1,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 5,
    paddingLeft: 5
  },
  imageBlock: {
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: 0
  },
  wrapper: {
    marginBottom: 5,
    marginLeft: 6,
    marginRight: 6,
    marginTop: 7
  },

  /** ****************
   * element styles *
   ***************** */
  brief: {
    color: mainTextColor,
    fontSize: 16
  },
  image: { flex: 1 },
  name: {
    color: mainTextColor,
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 5
  },
  placeholderImg: {
    alignSelf: 'center',
    height: 100,
    width: 100
  }
});

export default styles;
