/**
 * This HOC contains all action creators and store's data to send via props to MapContainer.
 *
 * @format
 */

import MapContainer from './MapContainer';
import createHOC from '../../utils/hocCreator';
import {
  createNewPoint,
  createPolygon,
  createPolygonComplete,
  getDirection,
  getUserLocation
} from './../../redux/geolocation/geolocationActions';

const mapStateToProps = (state) => {
  console.log('HOC');
  return {
    camera: {
      center: {
        latitude: state.geolocationState.domainData.latitude,
        longitude: state.geolocationState.domainData.longitude
      },
      altitude: state.geolocationState.domainData.altitude,
      pitch: state.geolocationState.uiState.pitch, // 13
      heading: state.geolocationState.uiState.heading, // 10
      zoom: state.geolocationState.uiState.zoom
    },
    isPolygonCreatingStarted:
      state.geolocationState.appState.isPolygonCreatingStarted,
    markers: state.geolocationState.domainData.markers,
    route: state.geolocationState.domainData.route.map(item => item.coords),
    routePoints: state.geolocationState.domainData.route,
    polygon: state.geolocationState.domainData.polygon,
    polyline: state.geolocationState.domainData.markers.map(item => item.coords)
  };
};
const mapDispatchToProps = {
  createNewPoint,
  createPolygon,
  createPolygonComplete,
  getDirection,
  getUserLocation
};

export default createHOC(MapContainer, mapStateToProps, mapDispatchToProps);
