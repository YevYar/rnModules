/**
 * This component presents the input for login / registration form.
 *
 * @format
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Image, TextInput, View } from 'react-native';

import styles from './styles/LRInputStyles';

const LRInput = ({
  icon,
  onBlur,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  value
}) => (
  <View style={styles.inputContainer}>
    <Image source={icon} style={styles.inputIcon} />
    <TextInput
      onBlur={() => onBlur()}
      onChangeText={text => onChangeText(text)}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={styles.input}
      underlineColorAndroid={_transparent}
      value={value}
    />
  </View>
);

LRInput.propTypes = {
  icon: PropTypes.number.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  value: PropTypes.string.isRequired
};

LRInput.defaultProps = { secureTextEntry: false };

const _transparent = 'transparent';

export default LRInput;
