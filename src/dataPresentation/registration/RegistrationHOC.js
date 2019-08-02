/**
 * This HOC contains all action creators and store's data to send via props to RegistrationContainer.
 *
 * @format
 */

import RegistrationContainer from './RegistrationContainer';
import createHOC from '../../utils/hocCreator';
import { register } from '../../redux/user/userAccount/registration/registrationActions';

const mapStateToProps = (state, ownProps) => ({ goTo: () => ownProps.navigation.navigate('Login') });

const mapDispatchToProps = { register };

export default createHOC(
  RegistrationContainer,
  mapStateToProps,
  mapDispatchToProps
);
