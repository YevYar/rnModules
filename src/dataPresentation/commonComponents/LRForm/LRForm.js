/**
 * This component presents the login / registration form.
 *
 * @format
 */

import { Formik } from 'formik';
import React from 'react';
import { KeyboardAvoidingView, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import * as yup from 'yup';

import LRErrorMessage from './LRErrorMessage';
import LRInput from './LRInput';
import images from '../../../constants/images';
import styles from './styles/LRFormStyles';
import colors from '../../../constants/colors';

const { PASSWORD, USERNAME } = images;
const { mainLight } = colors;

const LRForm = ({
  children,
  confirmPassword,
  onSubmit,
  submitButtonText,
  validationSchema
}) => (
  <Formik
    initialValues={{ confirmPassword: '', password: '', username: '' }}
    onSubmit={values => onSubmit(values.username, values.password)}
    validationSchema={validationSchema}
  >
    {({
      values,
      handleChange,
      errors,
      setFieldTouched,
      touched,
      handleSubmit
    }) => (
      <KeyboardAvoidingView enabled style={styles.container}>
        <LRInput
          icon={USERNAME}
          onBlur={() => setFieldTouched('username')}
          onChangeText={handleChange('username')}
          placeholder="Username"
          value={values.username}
        />
        {touched.username && errors.username && (
          <LRErrorMessage errorMessage={errors.username} />
        )}

        <LRInput
          icon={PASSWORD}
          onBlur={() => setFieldTouched('password')}
          onChangeText={handleChange('password')}
          placeholder="Password"
          secureTextEntry
          value={values.password}
        />
        {touched.password && errors.password && (
          <LRErrorMessage errorMessage={errors.password} />
        )}

        {confirmPassword && (
          <LRInput
            icon={PASSWORD}
            onBlur={() => setFieldTouched('confirmPassword')}
            onChangeText={handleChange('confirmPassword')}
            placeholder="Confirm password"
            secureTextEntry
            value={values.confirmPassword}
          />
        )}
        {confirmPassword &&
          touched.confirmPassword &&
          errors.confirmPassword && (
            <LRErrorMessage errorMessage={errors.confirmPassword} />
          )}

        <TouchableHighlight
          onPress={handleSubmit}
          style={styles.buttonContainer}
          underlayColor={mainLight}
        >
          <Text style={styles.buttonText}>{submitButtonText}</Text>
        </TouchableHighlight>
        {children}
      </KeyboardAvoidingView>
    )}
  </Formik>
);

LRForm.propTypes = {
  children: PropTypes.object,
  confirmPassword: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  submitButtonText: PropTypes.string.isRequired,
  validationSchema: PropTypes.object
};
LRForm.defaultProps = {
  children: {},
  confirmPassword: false,
  validationSchema: yup.object().shape({
    password: yup
      .string()
      .min(4, 'Password must be more than 3 symbols')
      .max(15, 'Password must be less than 16 symbols')
      .matches(
        /^([0-9A-Za-z]*)$/,
        'Password can contain only latin letters and digits'
      )
      .required('Password is a required field'),
    username: yup
      .string()
      .min(3, 'Username must be more than 2 symbols')
      .max(12, 'Username must be less than 13 symbols')
      .matches(
        /^([0-9A-Za-z]*)$/,
        'Username can contain only latin letters and digits'
      )
      .required('Username is a required field')
  })
};

export default LRForm;
