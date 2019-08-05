/**
 * This module contains main app navigator (stack navigator).
 *
 * @format
 * @flow
 */

import React from "react";
import { createStackNavigator } from "react-navigation";

<<<<<<< Updated upstream
import AboutProductContainer from '../containers/AboutProductContainer';
import AccountButtonContainer from '../containers/AccountButtonContainer';
import CommentsContainer from '../containers/CommentsContainer';
import LoginContainer from '../containers/LoginContainer';
import ProductsContainer from '../containers/ProductsContainer';
import RegistrationContainer from '../containers/RegistrationContainer';
import { mainDark, navHeaderElementsColor } from '../constants/colors';
=======
import AboutProductHOC from "../dataPresentation/aboutProduct/AboutProductHOC";
import AccountButtonHOC from "../dataPresentation/accountButton/AccountButtonHOC";
import CommentsHOC from "../dataPresentation/comments/CommentsHOC";
import LoginHOC from "../dataPresentation/login/LoginHOC";
import ProductsHOC from "../dataPresentation/products/ProductsHOC";
import RegistrationHOC from "../dataPresentation/registration/RegistrationHOC";
import colors from "../constants/colors";

const { mainDark, navHeaderElementsColor } = colors;
>>>>>>> Stashed changes

export default createStackNavigator(
  {
    Home: {
<<<<<<< Updated upstream
      screen: ProductsContainer,
      navigationOptions: { title: 'Products' },
    },
    About: {
      screen: AboutProductContainer,
      navigationOptions: { title: 'About product' },
    },
    Comments: {
      screen: CommentsContainer,
      navigationOptions: { title: 'Comments' },
    },
    Login: {
      screen: LoginContainer,
      navigationOptions: { headerRight: null, title: 'Login' },
    },
    Registration: {
      screen: RegistrationContainer,
      navigationOptions: { headerRight: null, title: 'Registration' },
    },
=======
      screen: ProductsHOC,
      navigationOptions: { title: "Products" }
    },
    About: {
      screen: AboutProductHOC,
      navigationOptions: { title: "About product" }
    },
    Comments: {
      screen: CommentsHOC,
      navigationOptions: { title: "Comments" }
    },
    Login: {
      screen: LoginHOC,
      navigationOptions: { headerRight: null, title: "Login" }
    },
    Registration: {
      screen: RegistrationHOC,
      navigationOptions: { headerRight: null, title: "Registration" }
    }
>>>>>>> Stashed changes
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerRight: (
<<<<<<< Updated upstream
        <AccountButtonContainer onPress={() => navigation.navigate('Login')} />
=======
        <AccountButtonHOC onPress={() => navigation.navigate("Login")} />
>>>>>>> Stashed changes
      ),
      headerStyle: {
        backgroundColor: mainDark,
        height: 50,
      },
      headerTintColor: navHeaderElementsColor,
      headerTitleStyle: {
        fontSize: 23,
<<<<<<< Updated upstream
        fontWeight: 'bold',
      },
    }),
    initialRouteName: 'Home',
  },
=======
        fontWeight: "bold"
      }
    }),
    initialRouteName: "Home"
  }
>>>>>>> Stashed changes
);
