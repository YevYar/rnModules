/**
 * This component presents the text button for map.
 *
 * @format
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableHighlight } from 'react-native';

import colors from '../../../constants/colors';
import styles from './styles/MapTextButtonStyles';

const { additionalLight } = colors;

const MapIconButton = ({ onPress, style, text }) => (
  <TouchableHighlight
    onPress={onPress}
    style={{ ...styles.button, ...style }}
    underlayColor={additionalLight}
  >
    <Text style={styles.text}>{text}</Text>
  </TouchableHighlight>
);

MapIconButton.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.object,
  text: PropTypes.string.isRequired
};

MapIconButton.defaultProps = {
  onPress: () => null,
  style: {}
};

export default MapIconButton;
