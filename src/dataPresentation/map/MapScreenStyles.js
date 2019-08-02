/**
 * This module contains styles for MapScreen.
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
  bottomButtons: {
    alignItems: 'flex-end',
    bottom: 40,
    right: 20,
    position: 'absolute',
    zIndex: 1
  },
  finishButtonContainer: {
    alignSelf: 'center',
    bottom: 100,
    position: 'absolute',
    zIndex: 2
  },
  map: {
    flex: 1,
    zIndex: 0
  },
  page: {
    backgroundColor: screenBackground,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 55,
    marginTop: -50,
    padding: 0,
    overflow: 'hidden'
  },
  topButtons: {
    right: 20,
    position: 'absolute',
    top: 50,
    zIndex: 1
  },

  /** ****************
   * elements styles *
   ***************** */
  buttonStyle: { marginTop: 5 },
  finishButton: { width: 150 },
  locationButton: {
    right: 20,
    position: 'absolute',
    top: 50,
    zIndex: 1
  },
  toolButtonStyle: { marginLeft: 5 }
});

export default styles;
