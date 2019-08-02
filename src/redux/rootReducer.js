/**
 * This module contains the root reducer.
 *
 * @format
 */

import { POST_COMMENT_SUCCESS } from './comment/commentActions';
import catalogueReducer from './catalogue/catalogueReducer';
import commentReducer from './comment/commentReducer';
import geolocationReducer from './geolocation/geolocationReducer';
import userReducer from './user/userReducer';

const createNewState = (state, action) => ({
  catalogueState: catalogueReducer(state.catalogueState, action),
  commentsState: commentReducer(state.commentsState, action),
  geolocationState: geolocationReducer(state.geolocationState, action),
  userState: userReducer(state.userState, action)
});

export default (
  state = {
    catalogueState: {
      appState: { isProductsLoadingFinished: false, selectedProduct: -1 },
      domainData: { products: [] }
    },
    commentsState: {
      appState: {
        isCommentsLoadedWithoutErrors: false,
        isCommentsLoadingFinished: false,
        tempCommentId: -1
      },
      domainData: { comments: {} },
      uiState: { isCommentInputVisible: false }
    },
    userState: {
      appState: { isLogged: false },
      domainData: { token: '', username: '' }
    },
    geolocationState: {
      appState: {
        isGetDirectionStarted: false,
        isUserLocationWasUpdated: true,
        isPolygonCreatingStarted: false
      },
      domainData: {
        altitude: 0,
        heading: 0,
        latitude: 37.78825,
        longitude: -122.4324,
        markers: [],
        markersNumber: 0,
        polygon: [],
        route: []
      },
      uiState: {
        pitch: 0, // 13
        heading: 0, // 10
        zoom: 9
      }
    }
  },
  action
) => {
  switch (action.type) {
    case POST_COMMENT_SUCCESS:
      action.newComment.created_by = { username: state.userState.domainData.username };
      // don't use decrement operator, because it can mutate store
      action.newComment.id = state.commentsState.appState.tempCommentId - 1;
      action.newComment.product = state.catalogueState.appState.selectedProduct;
      action.selectedProduct = state.catalogueState.appState.selectedProduct;
      return createNewState(state, action);

    default:
      return createNewState(state, action);
  }
};
