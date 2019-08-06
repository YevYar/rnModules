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
import { setTopLevelNavigator } from './services/NavigationService';
import { fetchProducts } from './redux/catalogue/catalogueActions';
import { restoreSession } from './redux/user/sessionStore/restoreSession/restoreSessionActions';
import store from './redux/store';

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

const mapDispatchToProps = { fetchProducts, restoreSession };

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const Root = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);

export default Root;
