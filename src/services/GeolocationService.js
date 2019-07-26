/**
 * This service contains the geolocation functions.
 *
 * @format
 */

import Geolocation from '@react-native-community/geolocation';
// import Geolocation from 'react-native-geolocation-service';

export const getUserLocation = () => {
  Geolocation.getCurrentPosition(
    (response) => {
      console.log(response);
      return response;
    },
    (error) => {
      console.log(error);
      return new Error(error);
    },
  );
};
