/**
 * This module contains main app navigator (stack navigator).
 *
 * @format
 */

import React from 'react';
import { createStackNavigator } from 'react-navigation';

import AboutProductHOC from '../view/aboutProduct/AboutProductHOC';
import AccountButtonHOC from '../view/accountButton/AccountButtonHOC';
import CommentsHOC from '../view/comments/CommentsHOC';
import LoginHOC from '../view/login/LoginHOC';
import MapHOC from '../view/map/MapHOC';
import ProductsHOC from '../view/products/ProductsHOC';
import RegistrationHOC from '../view/registration/RegistrationHOC';
import { mainDark, navHeaderElementsColor } from '../constants/colors';

export default createStackNavigator(
  {
    Home: {
      screen: ProductsHOC,
      navigationOptions: { title: 'Products' },
    },
    About: {
      screen: AboutProductHOC,
      navigationOptions: { title: 'About product' },
    },
    Comments: {
      screen: CommentsHOC,
      navigationOptions: { title: 'Comments' },
    },
    Login: {
      screen: LoginHOC,
      navigationOptions: { headerRight: null, title: 'Login' },
    },
    Registration: {
      screen: RegistrationHOC,
      navigationOptions: { headerRight: null, title: 'Registration' },
    },
    Map: {
      screen: MapHOC,
      navigationOptions: { title: 'Map' },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerRight: (
        <AccountButtonHOC onPress={() => navigation.navigate('Login')} />
      ),
      headerStyle: {
        backgroundColor: mainDark,
        height: 50,
      },
      headerTintColor: navHeaderElementsColor,
      headerTitleStyle: {
        fontSize: 23,
        fontWeight: 'bold',
      },
    }),
    initialRouteName: 'Home',
  },
);
