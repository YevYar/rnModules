/**
 * This is a root middleware.
 *
 * @format
 */

import { takeEvery } from 'redux-saga/effects';

/** *********
 * ACTIONS  *
 ********** */
import {
  GET_USER_LOCATION_REQUESTED,
  ON_MAP_VIEW_PRESS,
  ROUTE_POINTS_CHOSEN
} from './geolocation/geolocationActions';
import {
  FETCH_PRODUCT_COMMENTS_REQUESTED,
  POST_COMMENT_REQUESTED
} from './comment/commentActions';
import { FETCH_PRODUCTS_REQUESTED } from './catalogue/catalogueActions';
import { LOGIN_REQUESTED } from './user/userAccount/authorization/authorizationActions';
import { LOGOUT_REQUESTED } from './user/userAccount/logout/logoutActions';
import { REGISTER_REQUESTED } from './user/userAccount/registration/registrationActions';
import { RESTORE_SESSION_REQUESTED } from './user/sessionStore/restoreSession/restoreSessionActions';

/** **********
 * HANDLERS  *
 *********** */
import {
  onGetUserLocation,
  onMapViewPress,
  onRoutePointsChosen
} from './geolocation/geolocationMiddleware';
import {
  onFetchProductComments,
  onPostComment
} from './comment/commentMiddleware';
import { onFetchProducts } from './catalogue/catalogueMiddleware';
import { onLogin } from './user/userAccount/authorization/authorizationMiddleware';
import { onLogout } from './user/userAccount/logout/logoutMiddleware';
import { onRegister } from './user/userAccount/registration/registrationMiddleware';
import { onRestoreSession } from './user/sessionStore/restoreSession/restoreSessionMiddleware';

export default function* rootSaga() {
  yield takeEvery(ON_MAP_VIEW_PRESS, onMapViewPress);
  yield takeEvery(FETCH_PRODUCTS_REQUESTED, onFetchProducts);
  yield takeEvery(FETCH_PRODUCT_COMMENTS_REQUESTED, onFetchProductComments);
  yield takeEvery(GET_USER_LOCATION_REQUESTED, onGetUserLocation);
  yield takeEvery(LOGIN_REQUESTED, onLogin);
  yield takeEvery(LOGOUT_REQUESTED, onLogout);
  yield takeEvery(POST_COMMENT_REQUESTED, onPostComment);
  yield takeEvery(REGISTER_REQUESTED, onRegister);
  yield takeEvery(RESTORE_SESSION_REQUESTED, onRestoreSession);
  yield takeEvery(ROUTE_POINTS_CHOSEN, onRoutePointsChosen);
}
