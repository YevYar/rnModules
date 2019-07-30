/**
 * This component presents the product row in the product list.
 *
 * @format
 */

import Image from 'react-native-image-progress';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image as SImage, Text, TouchableHighlight, View } from 'react-native';
// import ProgressCircleSnail from "react-native-progress/CircleSnail";

import ProgressBar from 'react-native-progress/Bar';
import images from '../../../constants/images';
import styles from './styles/ProductRowStyles';
import colors from '../../../constants/colors';

const { PLACEHOLDER } = images;
const { mainDark, screenBackground } = colors;

export default class ProductRow extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };

  state = { loadError: false };

  changeToDefaultImg() {
    this.setState({ loadError: true });
  }

  render() {
    const { image, onPress, text, title } = this.props;
    const img = this.state.loadError ? (
      <SImage source={PLACEHOLDER} style={styles.placeholderImg} />
    ) : (
      <Image
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/4/43/Very_Large_Array%2C_2012.jpg'
          /* image */
        }}
        indicator={ProgressBar /* ProgressCircleSnail */}
        indicatorProps={{ color: mainDark }}
        onError={() => this.changeToDefaultImg()}
        resizeMode="contain"
        style={styles.image}
        threshold={0}
      />
    );

    return (
      <View style={styles.wrapper}>
        <TouchableHighlight
          onPress={() => onPress()}
          underlayColor={screenBackground}
        >
          <View style={styles.container}>
            <View style={styles.imageBlock}>{img}</View>
            <View style={styles.descriptionBlock}>
              <Text style={styles.name}>{title}</Text>
              <Text style={styles.brief}>{text}</Text>
              <Text />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
