/**
 * This module contains main app navigator (stack navigator).
 *
 * @format
 */

import React from 'react';
import { createStackNavigator } from 'react-navigation';

import AboutProductHOC from '../dataPresentation/aboutProduct/AboutProductHOC';
import AccountButtonHOC from '../dataPresentation/accountButton/AccountButtonHOC';
import CommentsHOC from '../dataPresentation/comments/CommentsHOC';
import LoginHOC from '../dataPresentation/login/LoginHOC';
import MapHOC from '../dataPresentation/map/MapHOC';
import ProductsHOC from '../dataPresentation/products/ProductsHOC';
import RegistrationHOC from '../dataPresentation/registration/RegistrationHOC';
import colors from '../constants/colors';

const { mainDark, navHeaderElementsColor } = colors;

export default createStackNavigator(
  {
    Home: {
      screen: ProductsHOC,
      navigationOptions: { title: 'Products' }
    },
    About: {
      screen: AboutProductHOC,
      navigationOptions: { title: 'About product' }
    },
    Comments: {
      screen: CommentsHOC,
      navigationOptions: { title: 'Comments' }
    },
    Login: {
      screen: LoginHOC,
      navigationOptions: { headerRight: null, title: 'Login' }
    },
    Registration: {
      screen: RegistrationHOC,
      navigationOptions: { headerRight: null, title: 'Registration' }
    },
    Map: {
      screen: MapHOC,
      navigationOptions: { title: 'Map' }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerRight: (
        <AccountButtonHOC onPress={() => navigation.navigate('Login')} />
      ),
      headerStyle: {
        backgroundColor: mainDark,
        height: 50
      },
      headerTintColor: navHeaderElementsColor,
      headerTitleStyle: {
        fontSize: 23,
        fontWeight: 'bold'
      }
    }),
    initialRouteName: 'Home'
  }
);
