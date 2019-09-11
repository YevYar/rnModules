/**
 * This screen (or page) presents the registration page.
 *
 * @format
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableHighlight, View } from 'react-native';

import LRForm from '../commonComponents/LRForm/LRForm';
import styles from './RegistrationScreenStyles';

const RegistrationScreen = ({ goTo, register, validationSchema }) => (
  <View style={styles.container}>
    <LRForm
      confirmPassword
      onSubmit={register}
      submitButtonText="Sign up"
      validationSchema={validationSchema}
    >
      <TouchableHighlight
        onPress={() => goTo()}
        style={styles.buttonContainerWithoutDecor}
        underlayColor={_transparent}
      >
        <Text style={styles.additionalButtonText}>Sign in</Text>
      </TouchableHighlight>
    </LRForm>
  </View>
);

RegistrationScreen.propTypes = {
  goTo: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  validationSchema: PropTypes.object.isRequired
};

const _transparent = 'transparent';

export default RegistrationScreen;
