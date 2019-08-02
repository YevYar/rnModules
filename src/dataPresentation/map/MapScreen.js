/**
 * This screen (or page) presents the map.
 *
 * @format
 */

import MapView, {
  Marker,
  Polygon,
  Polyline,
  PROVIDER_GOOGLE
} from 'react-native-maps';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, View } from 'react-native';

import MapIconButton from './components/MapIconButton';
import MapTextButton from './components/MapTextButton';
import colors from '../../constants/colors';
import styles from './MapScreenStyles';

const { polygonFillColor } = colors;

export default class MapScreen extends Component {
  static propTypes = {
    camera: PropTypes.object.isRequired,
    createNewPoint: PropTypes.func.isRequired,
    createPolygon: PropTypes.func.isRequired,
    createPolygonComplete: PropTypes.func.isRequired,
    getDirection: PropTypes.func.isRequired,
    getUserLocation: PropTypes.func.isRequired,
    isPolygonCreatingStarted: PropTypes.bool.isRequired,
    markers: PropTypes.array.isRequired,
    route: PropTypes.array,
    routePoints: PropTypes.array,
    polygon: PropTypes.array,
    polyline: PropTypes.array
  };

  static defaultProps = {
    route: [],
    routePoints: [],
    polygon: [],
    polyline: []
  };

  constructor(props) {
    super(props);
    this.state = {
      isToolbarHidden: true,
      toolbarWidth: new Animated.Value(0)
    };
    this.state.toolbarWidth.addListener(({ value }) => {
      if (value === 0) {
        this.setState({ isToolbarHidden: true });
      }
      if (value === 222) {
        this.setState({ isToolbarHidden: false });
      }
    });

    this.finishRepeating = this.finishRepeating.bind(this);
    this.pitchLess = this.pitchLess.bind(this);
    this.pitchMore = this.pitchMore.bind(this);
    this.rotateLeft = this.rotateLeft.bind(this);
    this.rotateRight = this.rotateRight.bind(this);
    this.startRepeating = this.startRepeating.bind(this);
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
  }

  isCameraShouldBeUpdated = true;
  timer = null;
  camera;

  shouldComponentUpdate(nextProps) {
    console.log('shouldComponentUpdate');
    if (
      this.camera &&
      (nextProps.camera.center.latitude !== this.camera.center.latitude ||
        nextProps.camera.center.longitude !== this.camera.center.longitude) &&
      this.isCameraShouldBeUpdated
    ) {
      this._mapView
        .getCamera()
        .then((camera) => {
          const newCamera = {
            ...camera,
            center: { ...nextProps.camera.center }
          };
          this._mapView.animateCamera(newCamera);
        })
        .catch((error) => {
          console.log(`MapScreen.shouldComponentUpdate: ${error}`);
          this._mapView.animateCamera(nextProps.camera);
        });
      return false;
    }
    return true;
  }

  changeToolbarVisibility() {
    if (this.state.isToolbarHidden) {
      Animated.timing(this.state.toolbarWidth, {
        toValue: 222,
        duration: 500
      }).start();
    } else {
      Animated.timing(this.state.toolbarWidth, {
        toValue: 0,
        duration: 500
      }).start();
    }
  }

  getCamera(nameDisplayedBeforeError, resolve, reject = () => null) {
    this._mapView
      .getCamera()
      .then(resolve)
      .catch((error) => {
        console.log(`${nameDisplayedBeforeError}: ${error}`);
        reject();
      });
  }

  pitchLess() {
    this.getCamera('MapScreen.pitchLess', (camera) => {
      const newCamera = {
        ...camera,
        pitch: camera.pitch - 3 >= 0 ? camera.pitch - 3 : camera.pitch
      };
      this._mapView.animateCamera(newCamera);
    });
  }

  pitchMore() {
    this.getCamera('MapScreen.pitchMore', (camera) => {
      const newCamera = {
        ...camera,
        pitch: camera.pitch + 3 <= 90 ? camera.pitch + 3 : camera.pitch
      };
      this._mapView.animateCamera(newCamera);
    });
  }

  rotateRight() {
    this.getCamera('MapScreen.rotateRight', (camera) => {
      const newCamera = {
        ...camera,
        heading: camera.heading + 10
      };
      this._mapView.animateCamera(newCamera);
    });
  }

  rotateLeft() {
    this.getCamera('MapScreen.rotateLeft', (camera) => {
      const newCamera = {
        ...camera,
        heading: camera.heading - 10
      };
      this._mapView.animateCamera(newCamera);
    });
  }

  zoomIn() {
    this.getCamera('MapScreen.zoomIn', (camera) => {
      const newCamera = {
        ...camera,
        zoom: camera.zoom + 1
      };
      this._mapView.animateCamera(newCamera);
    });
  }

  zoomOut() {
    this.getCamera('MapScreen.zoomOut', (camera) => {
      const newCamera = {
        ...camera,
        zoom: camera.zoom - 1
      };
      this._mapView.animateCamera(newCamera);
    });
  }

  startRepeating(fun) {
    console.log('<============= START');
    // setTimeout(() => fun(fun), this.state.longPressTimer);
    clearInterval(this.timer);
    this.timer = setInterval(fun, 200);
  }

  finishRepeating() {
    console.log('<============= FINISH');
    console.log(this.timer);
    clearInterval(this.timer);
  }

  onCreatePolygon() {
    const { createPolygon } = this.props;

    this.getCamera(
      'MapScreen.onCreatePolygon',
      (camera) => {
        this.camera = camera;
        this.isCameraShouldBeUpdated = false;
        createPolygon();
      },
      createPolygon
    );
  }

  onGetLocation() {
    const { getUserLocation } = this.props;
    this.getCamera(
      'MapScreen.onGetLocation',
      (tempCamera) => {
        this.camera = tempCamera;
        this.isCameraShouldBeUpdated = true;
        getUserLocation();
      },
      () => {
        this.isCameraShouldBeUpdated = true;
        getUserLocation();
      }
    );
  }

  onMapViewPress(coordinate) {
    this.getCamera(
      'MapScreen.onMapViewPress',
      (camera) => {
        this.camera = camera;
        this.isCameraShouldBeUpdated = false;
        this.props.createNewPoint(coordinate);
      },
      () => this.props.createNewPoint(coordinate)
    );
  }

  render() {
    console.log('Render');
    const {
      createPolygonComplete,
      getDirection,
      isPolygonCreatingStarted,
      markers,
      route,
      routePoints,
      polygon,
      polyline
    } = this.props;
    let camera;
    this.camera ? (camera = this.camera) : (camera = this.props.camera);

    const toolbar = (
      <Animated.View
        style={{ ...styles.toolbar, width: this.state.toolbarWidth }}
      >
        <MapIconButton
          iconName="rotate-right"
          iconSize={36}
          onPress={this.rotateRight}
          onPressIn={() => this.startRepeating(this.rotateRight)}
          onPressOut={this.finishRepeating}
          style={styles.toolButtonStyle}
        />
        <MapIconButton
          iconName="rotate-left"
          iconSize={36}
          onPress={this.rotateLeft}
          onPressIn={() => this.startRepeating(this.rotateLeft)}
          onPressOut={this.finishRepeating}
          style={styles.toolButtonStyle}
        />
        <MapIconButton
          iconName="expand-less"
          iconSize={36}
          onPress={this.pitchLess}
          onPressIn={() => this.startRepeating(this.pitchLess)}
          onPressOut={this.finishRepeating}
          style={styles.toolButtonStyle}
        />
        <MapIconButton
          iconName="expand-more"
          iconSize={36}
          onPress={this.pitchMore}
          onPressIn={() => this.startRepeating(this.pitchMore)}
          onPressOut={this.finishRepeating}
          style={styles.toolButtonStyle}
        />
      </Animated.View>
    );

    return (
      <View style={styles.page}>
        {isPolygonCreatingStarted && (
          <View style={styles.finishButtonContainer}>
            <MapTextButton
              onPress={createPolygonComplete}
              style={styles.finishButton}
              text="Finish"
            />
          </View>
        )}
        <View style={styles.topButtons}>
          <MapIconButton
            iconName="gps-fixed"
            iconSize={30}
            onPress={() => this.onGetLocation()}
            style={styles.buttonStyle}
          />
          <MapIconButton
            iconName="directions"
            iconSize={30}
            onPress={getDirection}
            style={styles.buttonStyle}
          />
          <MapIconButton
            iconName="turned-in"
            iconSize={30}
            onPress={() => this.onCreatePolygon()}
            style={styles.buttonStyle}
          />
        </View>
        <View style={styles.bottomButtons}>
          <MapIconButton
            iconName="zoom-in"
            iconSize={36}
            onPress={this.zoomIn}
            onPressIn={() => this.startRepeating(this.zoomIn)}
            onPressOut={this.finishRepeating}
            style={styles.buttonStyle}
          />
          <MapIconButton
            iconName="zoom-out"
            iconSize={36}
            onPress={this.zoomOut}
            onPressIn={() => this.startRepeating(this.zoomOut)}
            onPressOut={this.finishRepeating}
            style={styles.buttonStyle}
          />

          <MapIconButton
            iconName="more-horiz"
            iconSize={36}
            onPress={() => {
              this.changeToolbarVisibility();
            }}
            style={styles.buttonStyle}
          />
          {toolbar}
        </View>
        <MapView
          camera={camera}
          compassOffset={{ x: 0, y: 250 }}
          ref={component => (this._mapView = component)}
          onPress={(response) => {
            this.onMapViewPress(response.nativeEvent.coordinate);
          }}
          provider={PROVIDER_GOOGLE}
          rotateEnabled
          mapPadding={{
            top: -10,
            left: -10,
            right: -10,
            bottom: -10
          }}
          showsCompass
          showsUserLocation
          showsMyLocationButton={false}
          toolbarEnabled
          style={styles.map}
        >
          {markers.map(item => (
            <Marker
              coordinate={item.coords}
              description={item.description}
              key={item.number}
              title={item.title}
            />
          ))}
          {routePoints.map(item => (
            <Marker
              coordinate={item.coords}
              description={item.description}
              key={item.number}
              title={item.title}
            />
          ))}

          <Polyline coordinates={polyline} geodesic />
          <Polyline coordinates={route} geodesic strokeColor="green" />
          {polygon.length > 1 && (
            <Polygon
              coordinates={polygon}
              fillColor={polygonFillColor}
              geodesic
            />
          )}
        </MapView>
      </View>
    );
  }
}
