/**
 * This is a root middleware.
 *
 * @format
 * @flow
 */

import { takeEvery } from 'redux-saga/effects';

/** *********
 * ACTIONS  *
 ********** */
import {
  FETCH_PRODUCT_COMMENTS_REQUESTED,
  POST_COMMENT_REQUESTED,
} from '../actionCreators/commentActions';
import { FETCH_PRODUCTS_REQUESTED } from '../actionCreators/catalogueActions';
import { LOGIN_REQUESTED } from '../actionCreators/UserAccountActions/authorizationActions';
import { LOGOUT_REQUESTED } from '../actionCreators/UserAccountActions/logoutActions';
import { REGISTER_REQUESTED } from '../actionCreators/UserAccountActions/registrationActions';
import { RESTORE_SESSION_REQUESTED } from '../actionCreators/SessionStoreActions/restoreSessionActions';

/** **********
 * HANDLERS  *
 *********** */
import { onFetchProductComments, onPostComment } from './commentMiddleware';
import { onFetchProducts } from './catalogueMiddleware';
import { onLogin } from './UserAccountMiddleware/authorizationMiddleware';
import { onLogout } from './UserAccountMiddleware/logoutMiddleware';
import { onRegister } from './UserAccountMiddleware/registrationMiddleware';
import { onRestoreSession } from './SessionStoreMiddleware/restoreSessionMiddleware';

export default function* rootSaga() {
  yield takeEvery(FETCH_PRODUCTS_REQUESTED, onFetchProducts);
  yield takeEvery(FETCH_PRODUCT_COMMENTS_REQUESTED, onFetchProductComments);
  yield takeEvery(LOGIN_REQUESTED, onLogin);
  yield takeEvery(LOGOUT_REQUESTED, onLogout);
  yield takeEvery(POST_COMMENT_REQUESTED, onPostComment);
  yield takeEvery(REGISTER_REQUESTED, onRegister);
  yield takeEvery(RESTORE_SESSION_REQUESTED, onRestoreSession);
}
