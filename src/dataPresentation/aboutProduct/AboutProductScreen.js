/**
 * This screen (or page) presents information about the selected product.
 *
 * @format
 */

import Image from 'react-native-image-progress';
import React, { Component } from 'react';
import ProgressBar from 'react-native-progress/Bar';
import PropTypes from 'prop-types';
import {
  Dimensions,
  Image as SImage,
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
// import ProgressCircleSnail from 'react-native-progress/CircleSnail';

import colors from '../../constants/colors';
import images from '../../constants/images';
import styles from './AboutProductScreenStyles';

const { PLACEHOLDER_BIG } = images;
const { mainDark } = colors;

export default class AboutProductScreen extends Component {
  static propTypes = {
    fetchProductComments: PropTypes.func.isRequired,
    goTo: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
  };

  state = {
    height: 100,
    loadError: false,
    width: 100
  };

  changeToDefaultImg() {
    this.setState({ loadError: true });
  }

  defineImageDimensions() {
    let accessibleHeight = Dimensions.get('window').height;
    let accessibleWidth = Dimensions.get('window').width;
    accessibleHeight /= 2;
    accessibleWidth -= 20;

    const { img } = this.props.product;

    Image.getSize(
      img,
      (width, height) => {
        const proportions = width / height;
        if (width > accessibleWidth) {
          width = accessibleWidth;
          height = width / proportions;
        }
        if (height > accessibleHeight) {
          height = accessibleHeight;
          width = height * proportions;
        }
        this.setState({ width, height });
      },
      () => {}
    );
  }

  render() {
    const { fetchProductComments, goTo, product } = this.props;

    const img = this.state.loadError ? (
      <SImage source={PLACEHOLDER_BIG} style={styles.placeholderImg} />
    ) : (
      <Image
        source={{ uri: product.img }}
        indicator={ProgressBar /* ProgressCircleSnail */}
        indicatorProps={{ color: mainDark }}
        onError={() => this.changeToDefaultImg()}
        onLoad={() => this.defineImageDimensions()}
        resizeMode="contain"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          alignSelf: 'center',
          height: this.state.height,
          width: this.state.width
        }}
        threshold={0}
      />
    );

    return (
      <ScrollView style={styles.page}>
        <View>
          <Text style={styles.name}>{product.title}</Text>
          <View style={styles.startLine} />
          {img}
          <Text style={styles.description}>{product.text}</Text>
          <View style={styles.endLine} />
          <TouchableHighlight
            onPress={() => {
              fetchProductComments();
              goTo();
            }}
            style={styles.commentsButton}
            underlayColor={mainDark}
          >
            <Text style={styles.commentsButtonText}>COMMENTS</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}
