/**
 * This component presents the account button in the header.
 *
 * @format
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
  renderers
} from 'react-native-popup-menu';

import images from '../../constants/images';
import styles from './AccountButtonStyles';
import colors from '../../constants/colors';

const { ACCOUNT } = images;
const { Popover } = renderers;
const { mainLight } = colors;

const AccountButton = ({ isLogged, logout, onPress, username }) => {
  const element = isLogged ? (
    <Menu
      renderer={Popover}
      rendererProps={{
        anchorStyle: styles.anchor,
        placement: 'left',
        preferredPlacement: 'left'
      }}
    >
      <MenuTrigger>
        <View style={styles.container}>
          <Text style={styles.text}>
            Hello,{'\n'}
            <Text style={styles.name}>{username}</Text>
          </Text>
        </View>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption onSelect={() => logout()}>
          <Text style={styles.logout}>Logout</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  ) : (
    <TouchableHighlight
      onPress={() => onPress()}
      style={styles.container}
      underlayColor={mainLight}
    >
      <Image resizeMode="contain" source={ACCOUNT} style={styles.image} />
    </TouchableHighlight>
  );

  return element;
};

AccountButton.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};

export default AccountButton;
