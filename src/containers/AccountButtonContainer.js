/**
 * This container contains all the functions and data to dispatch them to the AccountButton.
 *
 * @format
 * @flow
 */

import { connect } from 'react-redux';

import AccountButton from '../components/components/AccountButton';
import { logout } from '../actionCreators/UserAccountActions/logoutActions';

const mapStateToProps = (state, ownProps) => ({
  isLogged: state.userState.appState.isLogged,
  onPress: ownProps.onPress,
  username: state.userState.domainData.username,
});

const mapDispatchToProps = { logout };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountButton);
