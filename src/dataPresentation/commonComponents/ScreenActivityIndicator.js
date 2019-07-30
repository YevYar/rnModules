/**
 * This component presents the screen activity indicator.
 * It is displayed on the screen, when some array is fetched from the server.
 *
 * @format
 */

import React from 'react';
import { ActivityIndicator } from 'react-native';

import styles from './styles/ScreenActivityIndicatorStyles';
import colors from '../../constants/colors';

const { mainDark } = colors;

export default () => (
  <ActivityIndicator
    size={55}
    color={mainDark}
    style={styles.activityIndicator}
  />
);
