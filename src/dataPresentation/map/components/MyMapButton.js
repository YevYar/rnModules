/**
 * This component presents the button for map.
 *
 * @format
 */

import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import colors from '../../../constants/colors';
import styles from './styles/MyMapButtonStyles';

const { mainLight } = colors;

const MyMapButton = ({ iconName, iconSize, iconStyle, margins, onPress }) => (
  <View style={margins}>
    <Icon.Button
      name={iconName} // "gps-fixed"
      iconStyle={{ ...styles.icon, ...iconStyle }}
      backgroundColor={mainLight}
      onPress={onPress} // {() => console.log('hello')}
      size={iconSize}
      style={styles.button}
    />
  </View>
);

MyMapButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number.isRequired,
  iconStyle: PropTypes.object,
  margins: PropTypes.object,
  onPress: PropTypes.func.isRequired
};

MyMapButton.defaultProps = {
  iconStyle: {},
  margins: {}
};

export default MyMapButton;
