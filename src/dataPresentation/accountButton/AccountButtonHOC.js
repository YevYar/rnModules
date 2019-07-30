/**
 * This HOC contains all action creators and store's data to send via props to AccountButtonContainer.
 *
 * @format
 */

import AccountButtonContainer from './AccountButtonContainer';
import createHOC from '../../utils/hocCreator';
import { logout } from '../../redux/user/userAccount/logout/logoutActions';

const mapStateToProps = (state, ownProps) => ({
  isLogged: state.userState.appState.isLogged,
  onPress: ownProps.onPress,
  username: state.userState.domainData.username
});

const mapDispatchToProps = { logout };

export default createHOC(
  AccountButtonContainer,
  mapStateToProps,
  mapDispatchToProps
);
