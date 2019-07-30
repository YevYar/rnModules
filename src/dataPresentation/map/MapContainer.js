/**
 * This container contains all the functions and data to dispatch them to the MapScreen.
 *
 * @format
 */

import React from 'react';

import MapScreen from './MapScreen';

const mapConfig = {
  camera: {
    center: {
      latitude: 37.78825,
      longitude: -122.4324
    },
    altitude: 0,
    pitch: 0, // 13
    heading: 0, // 10
    zoom: 9
  },
  mapPadding: {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  },
  region: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }
};

// Screen requires camera, getUserLocation, region
export default props => <MapScreen {...{ ...props, ...mapConfig }} />;
