/**
 * This component presents the button for map.
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { additionalDark, mainLight } from '../../../constants/colors';

type Props = {
  iconName: string,
  onPress: Function
};

export default ({
 iconName, iconSize, iconStyle, margins, onPress 
}) => (
  <View style={margins}>
    <Icon.Button
      name={iconName} // "gps-fixed"
      iconStyle={{ ...styles.icon, ...iconStyle }}
      backgroundColor={mainLight}
      onPress={onPress} // {() => console.log('hello')}
      size={iconSize}
      style={styles.button}
    />
  </View>
);

const styles = StyleSheet.create({
  /** *****************
   * container styles *
   ****************** */
  container: {
    marginTop: 5,
  },

  /** ****************
   * elements styles *
   ***************** */
  button: {
    borderColor: additionalDark,
    borderWidth: 2,
    justifyContent: 'center',
    height: 50,
    maxWidth: 50,
    padding: 0,
    width: 50,
  },
  icon: {
    marginRight: 9,
  },
});
