/**
 * This module contains selector that selects data from geolocationState.
 *
 * @format
 */

export const getIsGettingRouteStarted = state =>
  state.geolocationState.appState.isGetDirectionStarted;

export const getIsPolygonCreatingStarted = state =>
  state.geolocationState.appState.isPolygonCreatingStarted;

export const getMarkersNumber = state =>
  state.geolocationState.domainData.markersNumber;

export const getRoute = state => state.geolocationState.domainData.route;

export const getRoutePointsNumber = state =>
  state.geolocationState.domainData.route.length;
