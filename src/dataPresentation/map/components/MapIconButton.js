/**
 * This component presents the icon button for map.
 *
 * @format
 */

import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';

import colors from '../../../constants/colors';
import styles from './styles/MapIconButtonStyles';

const { additionalLight } = colors;

const MapIconButton = ({
  iconName,
  iconSize,
  onPress,
  onPressIn,
  onPressOut,
  style
}) => (
  <TouchableHighlight
    onPress={onPress}
    onPressIn={onPressIn}
    onPressOut={onPressOut}
    style={{ ...styles.button, ...style }}
    underlayColor={additionalLight}
  >
    <Icon color="#FFF" name={iconName} size={iconSize} />
  </TouchableHighlight>
);

MapIconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number.isRequired,
  onPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
  style: PropTypes.object
};

MapIconButton.defaultProps = {
  onPress: () => null,
  onPressIn: () => null,
  onPressOut: () => null,
  style: {}
};

export default MapIconButton;
