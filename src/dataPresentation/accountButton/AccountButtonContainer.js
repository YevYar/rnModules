/**
 * This container contains all the functions and data to dispatch them to the AccountButton.
 *
 * @format
 */

import React from 'react';

import AccountButton from './AccountButton';

// Screen requires isLogged, logout, onPress, username
export default props => <AccountButton {...props} />;
