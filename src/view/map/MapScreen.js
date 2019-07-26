/**
 * This screen (or page) presents the map.
 *
 * @format
 */

import MapView, { Region, PROVIDER_GOOGLE } from 'react-native-maps';
import React, { Component } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

import MyMapButton from './components/MyMapButton';
import { screenBackground } from '../../constants/colors';

type Props = { getUserLocation: Function, region: Region };
type State = { isToolbarHidden: boolean, toolbarWidth: number };

export default class MapScreen extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isToolbarHidden: true,
      toolbarWidth: new Animated.Value(0),
    };
    this.state.toolbarWidth.addListener(({ value }) => {
      if (value === 0) {
        this.setState({
          isToolbarHidden: true,
        });
      }
      if (value === 222) {
        this.setState({
          isToolbarHidden: false,
        });
      }
    });
  }

  changeToolbarVisibility() {
    if (this.state.isToolbarHidden) {
      Animated.timing(this.state.toolbarWidth, {
        toValue: 222,
        duration: 500,
      }).start();
    } else {
      Animated.timing(this.state.toolbarWidth, {
        toValue: 0,
        duration: 500,
      }).start();
    }
  }

  render() {
    console.log('Render');

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
            iconStyle={{ marginLeft: 8 }}
            margins={styles.buttonMargins}
            onPress={this.props.getUserLocation}
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
          camera={this.props.camera}
          // region={this.props.region}
          rotateEnabled
          provider={PROVIDER_GOOGLE}
          mapPadding={{
            top: -10,
            left: -10,
            right: -10,
            bottom: -10,
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

const styles = StyleSheet.create({
  /** ******************
   * container styles *
   ******************* */
  bottomButtons: {
    alignItems: 'flex-end',
    bottom: 40,
    right: 20,
    position: 'absolute',
    zIndex: 1,
  },
  locationButtonContainer: {
    right: 20,
    position: 'absolute',
    top: 15,
    zIndex: 1,
  },
  page: {
    backgroundColor: screenBackground,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    zIndex: 0,
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 55,
    marginTop: -50,
    padding: 0,
    overflow: 'hidden',
  },

  /** ****************
   * elements styles *
   ***************** */
  buttonIcon: { marginLeft: 5 },
  buttonMargins: { marginTop: 5 },
  toolButtonMargins: { marginLeft: 5 },
});
