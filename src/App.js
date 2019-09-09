/**
 * Catalogue client
 * https://github.com/EugeneYarem/CatalogueClient
 *
 * @format
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createAppContainer } from 'react-navigation';
import { MenuProvider } from 'react-native-popup-menu';
import { Provider, connect } from 'react-redux';

import MainNavigator from './navigation/MainNavigator';
import store from './redux/store';
import withDeepLinking from './services/DeepLinkService';
import { setTopLevelNavigator } from './services/NavigationService';
import {
  fetchProducts,
  openProductInfoFromTheLink
} from './redux/catalogue/catalogueActions';
import { restoreSession } from './redux/user/sessionStore/restoreSession/restoreSessionActions';

const Navigation = createAppContainer(MainNavigator);

class App extends Component {
  static propTypes = { restoreSession: PropTypes.func.isRequired };

  componentDidMount() {
    /** ***********************************************************************************
     * Api requests have to contain token header if an user logged in in the last session.*
     * So app have to fetch products only after restoreSession will be executed.          *
     ************************************************************************************ */
    this.props.restoreSession(fetchProducts);
  }

  render() {
    return (
      <MenuProvider>
        <Navigation
          ref={(navigatorRef) => {
            setTopLevelNavigator(navigatorRef);
          }}
        />
      </MenuProvider>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  fetchProducts,
  openProductInfoFromTheLink,
  restoreSession
};

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(withDeepLinking(App));

const Root = () => (
  <Provider store={store}>
    <ConnectedApp
      onGetInitialUrlError={(err) => {
        console.log('?????????????????????????1');
        console.log(err);
      }}
      onCanOpenUrlError={(err) => {
        console.log('?????????????????????????2');
        console.log(err);
      }}
      onUrlIsNotSupported={(url) => {
        console.log('?????????????????????????3');
        console.log(`The ${url} is not supported.`);
      }}
      onCannotHandleUrl={(url) => {
        console.log('?????????????????????????4');
        console.log(`A handler for the ${url} was not found.`);
      }}
    />
  </Provider>
);

export default Root;
