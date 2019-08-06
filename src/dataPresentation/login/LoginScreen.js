/**
 * This screen (or page) presents the login page.
 *
 * @format
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableHighlight, View } from 'react-native';

import LRForm from '../commonComponents/LRForm/LRForm';
import styles from './LoginScreenStyles';

const LoginScreen = ({ goTo, login, validationSchema }) => (
  <View style={styles.container}>
    <LRForm
      onSubmit={login}
      submitButtonText="Sign in"
      validationSchema={validationSchema}
    >
      <TouchableHighlight
        onPress={() => goTo()}
        style={styles.buttonContainerWithoutDecor}
        underlayColor={_transparent}
      >
        <Text style={styles.additionalButtonText}>Sign up</Text>
      </TouchableHighlight>
    </LRForm>
  </View>
);

LoginScreen.propTypes = {
  goTo: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  validationSchema: PropTypes.object
};
LoginScreen.defaultProps = { validationSchema: undefined };

const _transparent = 'transparent';

export default LoginScreen;
