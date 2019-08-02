/**
 * This service contains the axios api client for connecting to the Google.
 *
 * @format
 */

import axios from 'axios';

const key = 'AIzaSyAgVsjlNPhrCFClLx2uvlNhKyuXUp5ygfA';

const instance = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/',
  timeout: 1000
});

export const getDirection = (startCoords, finishCoords) =>
  instance.get(`directions/json?origin=${startCoords.latitude},${
    startCoords.longitude
  }&destination=${finishCoords.latitude},${finishCoords.longitude}&key=${key}`);
