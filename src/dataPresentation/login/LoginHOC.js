/**
 * This HOC contains all action creators and store's data to send via props to LoginContainer.
 *
 * @format
 */

import LoginContainer from './LoginContainer';
import createHOC from '../../utils/hocCreator';
import { login } from '../../redux/user/userAccount/authorization/authorizationActions';

const mapStateToProps = (state, ownProps) => ({goTo: () => ownProps.navigation.navigate('Registration')});

const mapDispatchToProps = { login };

export default createHOC(LoginContainer, mapStateToProps, mapDispatchToProps);
