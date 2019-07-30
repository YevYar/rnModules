/**
 * This component presents the error message for login / registration form.
 *
 * @format
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import styles from './styles/LRErrorMessageStyles';

const LRErrorMessage = ({ errorMessage }) => (
  <View style={styles.errorTextWrapper}>
    <Text style={styles.error}>{errorMessage}</Text>
  </View>
);

LRErrorMessage.propTypes = { errorMessage: PropTypes.string.isRequired };

export default LRErrorMessage;
