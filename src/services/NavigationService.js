/**
 * This service contains the navigation functions that are used, when navigation prop is inaccessible.
 *
 * @format
 */

import { NavigationActions } from 'react-navigation';

let _navigator;

const setTopLevelNavigator = (navigatorRef) => {
  _navigator = navigatorRef;
};

const goBack = () => {
  _navigator.dispatch(NavigationActions.back());
};

const navigate = (routeName, params) => {
  _navigator.dispatch(NavigationActions.navigate({ routeName, params }));
};

export default {
  goBack,
  navigate,
  setTopLevelNavigator,
};
