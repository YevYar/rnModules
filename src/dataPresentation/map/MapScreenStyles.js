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
  locationButtonContainer: {
    right: 20,
    position: 'absolute',
    top: 15,
    zIndex: 1
  },
  page: {
    backgroundColor: screenBackground,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  map: {
    flex: 1,
    zIndex: 0
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 55,
    marginTop: -50,
    padding: 0,
    overflow: 'hidden'
  },

  /** ****************
   * elements styles *
   ***************** */
  buttonIcon: { marginLeft: 5 },
  buttonMargins: { marginTop: 5 },
  gpsButtonIcon: { marginLeft: 8 },
  toolButtonMargins: { marginLeft: 5 }
});

export default styles;
