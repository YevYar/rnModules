/**
 * This module contains middleware that executes all functions related to the geolocation.
 *
 * @format
 */

import { call, put, select } from 'redux-saga/effects';
// import polyline from "@mapbox/polyline";

import {
  addNewRoutePoint,
  createNewMarkerComplete,
  getDirectionFail,
  getDirectionSuccess,
  getUserLocationFail,
  getUserLocationSuccess,
  polygonCornerAdded,
  routePointsChosen
} from './geolocationActions';
import {
  getIsGettingRouteStarted,
  getIsPolygonCreatingStarted,
  getMarkersNumber,
  getRoute,
  getRoutePointsNumber
} from './geolocationSelector';
import { getDirection } from './../../services/GoogleService';
import { getUserLocation } from '../../services/GeolocationService';
import showErrorMessage from '../../utils/showErrorMessage';

const GET_DIRECTION_FAIL_MESSAGE =
  "Something has gone wrong. We can't get route from Google.";
const GET_LOCATION_FAIL_MESSAGE =
  "Something has gone wrong. We can't get your current location.";

export function* onMapViewPress(action) {
  /* ********************
   * CREATE NEW MARKER  *
   ******************** */
  let number = yield select(getMarkersNumber);
  ++number;
  const title = `Marker ${number}`;
  const description = `It is Marker #${number}`;
  const newMarker = {
    coords: action.coords,
    description,
    number,
    title
  };

  // if we create polygon
  const isPolygonCreatingStarted = yield select(getIsPolygonCreatingStarted);
  if (isPolygonCreatingStarted) {
    yield put(polygonCornerAdded(action.coords));
    return;
  }

  // if we create route or just want to create marker
  const isGetDirectionStarted = yield select(getIsGettingRouteStarted);
  isGetDirectionStarted
    ? yield put(addNewRoutePoint(newMarker))
    : yield put(createNewMarkerComplete(newMarker));
  const routePointsNumber = yield select(getRoutePointsNumber);

  if (routePointsNumber === 2) yield put(routePointsChosen());
}

export function* onGetUserLocation() {
  try {
    const response = yield call(getUserLocation);
    console.log('<========LOCATION');
    console.log(response);
    console.log(response.coords);
    yield put(getUserLocationSuccess(response.coords));
  } catch (error) {
    console.log(`getUserLocation error: ${error}`);
    showErrorMessage(GET_LOCATION_FAIL_MESSAGE);
    yield put(getUserLocationFail());
  }
}

export function* onRoutePointsChosen() {
  try {
    const route = yield select(getRoute);
    const response = yield call(getDirection, route[0].coords, route[1].coords);
    console.log(response);
    // const direction = polyline.decode(response.);
    yield put(getDirectionSuccess(/* There should be an array with coordinates for polyline */));
  } catch (error) {
    console.log(`onRoutePointsChosen error: ${error}`);
    showErrorMessage(GET_DIRECTION_FAIL_MESSAGE);
    yield put(getDirectionFail());
  }
}
