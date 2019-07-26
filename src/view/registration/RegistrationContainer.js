/**
 * This container contains all the functions and data to dispatch them to the RegistrationScreen.
 *
 * @format
 */

import React from 'react';
import * as yup from 'yup';

import RegistrationScreen from './RegistrationScreen';

function equalTo(ref, msg) {
  this.test({
    name: 'equalTo',
    exclusive: false,
    message: msg,
    params: {
      reference: ref.path,
    },
    test(value) {
      return value === this.resolve(ref);
    },
  });
}
yup.addMethod(yup.string, 'equalTo', equalTo);

const validationSchema = yup.object().shape({
  confirmPassword: yup
    .string()
    .equalTo(yup.ref('password'), 'Passwords must be equal'),
  password: yup
    .string()
    .min(4, 'Password must be more than 3 symbols')
    .max(15, 'Password must be less than 16 symbols')
    .matches(
      /^([0-9A-Za-z]*)$/,
      'Password can contain only latin letters and digits',
    )
    .required('Password is a required field'),
  username: yup
    .string()
    .min(3, 'Username must be more than 2 symbols')
    .max(12, 'Username must be less than 13 symbols')
    .matches(
      /^([0-9A-Za-z]*)$/,
      'Username can contain only latin letters and digits',
    )
    .required('Username is a required field'),
});

export default props => (
  <RegistrationScreen {...props} validationSchema={validationSchema} />
);
