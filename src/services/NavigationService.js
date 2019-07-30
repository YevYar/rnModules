/**
 * This service contains the navigation functions that are used, when navigation prop is inaccessible.
 *
 * @format
 */

import { NavigationActions } from 'react-navigation';

let _navigator;

export const setTopLevelNavigator = (navigatorRef) => {
  _navigator = navigatorRef;
};

export const goBack = () => {
  _navigator.dispatch(NavigationActions.back());
};

export const navigate = (routeName, params) => {
  _navigator.dispatch(NavigationActions.navigate({ routeName, params }));
};
