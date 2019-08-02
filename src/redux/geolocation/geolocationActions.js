/**
 * This module contains actions related to the geolocation.
 *
 * @format
 */

export const ADD_NEW_ROUTE_POINT = 'ADD_NEW_ROUTE_POINT';
export const CREATE_NEW_MARKER_COMPLETE = 'CREATE_NEW_MARKER_COMPLETE';
export const GET_DIRECTION_FAIL = 'GET_DIRECTION_FAIL';
export const GET_DIRECTION_STARTED = 'GET_DIRECTION_STARTED';
export const GET_DIRECTION_SUCCESS = 'GET_DIRECTION_SUCCESS';
export const GET_USER_LOCATION_FAIL = 'GET_USER_LOCATION_FAIL';
export const GET_USER_LOCATION_REQUESTED = 'GET_USER_LOCATION_REQUESTED';
export const GET_USER_LOCATION_SUCCESS = 'GET_USER_LOCATION_SUCCESS';
export const ON_MAP_VIEW_PRESS = 'ON_MAP_VIEW_PRESS';
export const POLYGON_CORNER_ADDED = 'POLYGON_CORNER_ADDED';
export const POLYGON_CREATING_COMPLETED = 'POLYGON_CREATING_COMPLETED';
export const POLYGON_CREATING_STARTED = 'POLYGON_CREATING_STARTED';
export const ROUTE_POINTS_CHOSEN = 'ROUTE_POINTS_CHOSEN';

export const addNewRoutePoint = marker => ({
  type: ADD_NEW_ROUTE_POINT,
  marker
});

export const createNewPoint = coords => ({ type: ON_MAP_VIEW_PRESS, coords });

export const createNewMarkerComplete = marker => ({
  type: CREATE_NEW_MARKER_COMPLETE,
  marker
});

export const createPolygon = () => ({ type: POLYGON_CREATING_STARTED });

export const createPolygonComplete = () => ({ type: POLYGON_CREATING_COMPLETED });

export const getDirection = () => ({ type: GET_DIRECTION_STARTED });

export const getDirectionFail = () => ({ type: GET_DIRECTION_FAIL });

export const getDirectionSuccess = () => ({ type: GET_DIRECTION_SUCCESS });

export const getUserLocation = () => ({ type: GET_USER_LOCATION_REQUESTED });

export const getUserLocationFail = () => ({ type: GET_USER_LOCATION_FAIL });

export const getUserLocationSuccess = coords => ({
  type: GET_USER_LOCATION_SUCCESS,
  coords
});

export const polygonCornerAdded = corner => ({
  type: POLYGON_CORNER_ADDED,
  corner
});

export const routePointsChosen = () => ({ type: ROUTE_POINTS_CHOSEN });
