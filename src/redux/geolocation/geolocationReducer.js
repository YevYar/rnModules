/**
 * This module contains the reducer that updates the store
 * in the result of the actions related to the geolocation.
 *
 * @format
 */

import {
  ADD_NEW_ROUTE_POINT,
  CREATE_NEW_MARKER_COMPLETE,
  GET_DIRECTION_STARTED,
  GET_DIRECTION_SUCCESS,
  GET_USER_LOCATION_SUCCESS,
  POLYGON_CORNER_ADDED,
  POLYGON_CREATING_COMPLETED,
  POLYGON_CREATING_STARTED
} from './geolocationActions';

export default (state, action) => {
  switch (action.type) {
    case ADD_NEW_ROUTE_POINT:
      return {
        ...state,
        domainData: {
          ...state.domainData,
          markersNumber: state.domainData.markersNumber + 1,
          route: [...state.domainData.route, action.marker]
        }
      };

    case CREATE_NEW_MARKER_COMPLETE:
      return {
        ...state,
        appState: { ...state.appState, isUserLocationWasUpdated: false },
        domainData: {
          ...state.domainData,
          markers: [...state.domainData.markers, action.marker],
          markersNumber: state.domainData.markersNumber + 1
        }
      };

    case GET_DIRECTION_STARTED:
      return {
        ...state,
        appState: { ...state.appState, isGetDirectionStarted: true },
        domainData: { ...state.domainData, route: [] }
      };

    case GET_DIRECTION_SUCCESS:
      return {
        ...state,
        appState: { ...state.appState, isGetDirectionStarted: false }
      };

    case GET_USER_LOCATION_SUCCESS:
      return {
        ...state,
        appState: { ...state.appState, isUserLocationWasUpdated: true },
        domainData: {
          ...state.domainData,
          altitude: action.coords.altitude,
          heading: action.coords.heading,
          latitude: action.coords.latitude,
          longitude: action.coords.longitude
        },
        uiState: {
          ...state.uiState,
          heading: action.coords.heading
        }
      };

    case POLYGON_CORNER_ADDED:
      return {
        ...state,
        domainData: {
          ...state.domainData,
          polygon: [...state.domainData.polygon, action.corner]
        }
      };

    case POLYGON_CREATING_STARTED:
      return {
        ...state,
        appState: {
          ...state.appState,
          isPolygonCreatingStarted: true
        },
        domainData: { ...state.domainData, polygon: [] }
      };

    case POLYGON_CREATING_COMPLETED:
      return {
        ...state,
        appState: {
          ...state.appState,
          isPolygonCreatingStarted: false
        }
      };

    default:
      return state;
  }
};
