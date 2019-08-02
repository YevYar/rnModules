/**
 * This service contains the geolocation functions.
 *
 * @format
 */

import Geolocation from '@react-native-community/geolocation';
// import Geolocation from 'react-native-geolocation-service';

export const getUserLocation = () =>
  new Promise((resolve, reject) =>
    Geolocation.getCurrentPosition(resolve, reject));
