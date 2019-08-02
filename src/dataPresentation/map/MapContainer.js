/**
 * This container contains all the functions and data to dispatch them to the MapScreen.
 *
 * @format
 */

import React from 'react';
import { Alert } from 'react-native';

import MapScreen from './MapScreen';

const mapConfig = {
  region: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }
};

// Screen requires camera, createPolygon,createPolygonComplete, createNewPoint, getDirection, getUserLocation, isPolygonCreatingStarted, markers, route, routePoints, polygon, polyline
export default props => (
  <MapScreen
    {...props}
    createPolygon={() => {
      Alert.alert(
        'Create polygon',
        "Please, tap on the screen to create polygon corners and after click on 'Finish' button"
      );
      // eslint-disable-next-line react/prop-types
      props.createPolygon();
    }}
    getDirection={() => {
      Alert.alert(
        'Get direction',
        'Please, tap on two points that will be start and finish of the route'
      );
      // eslint-disable-next-line react/prop-types
      props.getDirection();
    }}
  />
); // {...{ ...props, ...mapConfig }}
