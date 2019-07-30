/**
 * This screen (or page) presents the map.
 *
 * @format
 */

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, View } from 'react-native';

import MyMapButton from './components/MyMapButton';
import styles from './MapScreenStyles';

export default class MapScreen extends Component {
  static propTypes = {
    camera: PropTypes.object,
    getUserLocation: PropTypes.func.isRequired,
    region: PropTypes.object
  };

  static defaultProps = {
    camera: {},
    region: {}
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

  render() {
    console.log('Render');
    const { camera, getUserLocation, region } = this.props;

    const toolbar = (
      <Animated.View
        style={{ ...styles.toolbar, width: this.state.toolbarWidth }}
      >
        <MyMapButton
          iconName="rotate-right"
          iconSize={36}
          iconStyle={styles.buttonIcon}
          margins={styles.toolButtonMargins}
        />
        <MyMapButton
          iconName="rotate-left"
          iconSize={36}
          iconStyle={styles.buttonIcon}
          margins={styles.toolButtonMargins}
        />

        <MyMapButton
          iconName="expand-less"
          iconSize={36}
          iconStyle={styles.buttonIcon}
          margins={styles.toolButtonMargins}
        />
        <MyMapButton
          iconName="expand-more"
          iconSize={36}
          iconStyle={styles.buttonIcon}
          margins={styles.toolButtonMargins}
        />
      </Animated.View>
    );

    return (
      <View style={styles.page}>
        <View style={styles.locationButtonContainer}>
          <MyMapButton
            iconName="gps-fixed"
            iconSize={30}
            iconStyle={styles.gpsButtonIcon}
            margins={styles.buttonMargins}
            onPress={getUserLocation}
          />
        </View>

        <View style={styles.bottomButtons}>
          <MyMapButton
            iconName="zoom-in"
            iconSize={36}
            iconStyle={styles.buttonIcon}
            margins={styles.buttonMargins}
          />
          <MyMapButton
            iconName="zoom-out"
            iconSize={36}
            iconStyle={styles.buttonIcon}
            margins={styles.buttonMargins}
          />

          <MyMapButton
            iconName="more-horiz"
            iconSize={36}
            iconStyle={styles.buttonIcon}
            margins={styles.buttonMargins}
            onPress={() => {
              this.changeToolbarVisibility();
            }}
          />
          {toolbar}
        </View>

        <MapView
          camera={camera}
          // region={region}
          rotateEnabled
          provider={PROVIDER_GOOGLE}
          mapPadding={{
            top: -10,
            left: -10,
            right: -10,
            bottom: -10
          }}
          showsUserLocation
          showsMyLocationButton={false}
          toolbarEnabled
          style={styles.map}
        />
      </View>
    );
  }
}
