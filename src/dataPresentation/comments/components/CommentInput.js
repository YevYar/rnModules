/**
 * This component presents the comment input.
 *
 * @format
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AirbnbRating } from 'react-native-ratings';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import { Image, TouchableHighlight, View } from 'react-native';

import images from '../../../constants/images';
import styles from './styles/CommentInputStyles';

const { _1STAR, _2STARS, _3STARS, _4STARS, _5STARS, CLOSE, SEND } = images;

export default class CommentInput extends Component {
  static propTypes = {
    onClosePress: PropTypes.func.isRequired,
    onSend: PropTypes.func.isRequired
  };

  state = {
    comment: '',
    rating: 5
  };

  changeComment(str) {
    this.setState({ comment: str });
  }

  changeRating(value) {
    this.setState({ rating: value });
  }

  render() {
    let imgSrc;
    switch (this.state.rating) {
      case 1:
        imgSrc = _1STAR;
        break;
      case 2:
        imgSrc = _2STARS;
        break;
      case 3:
        imgSrc = _3STARS;
        break;
      case 4:
        imgSrc = _4STARS;
        break;
      case 5:
        imgSrc = _5STARS;
        break;

      default:
        break;
    }

    const { onClosePress, onSend } = this.props;

    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => onClosePress()}
          style={styles.closeIconBlock}
          underlayColor={_transparent}
        >
          <Image source={CLOSE} style={styles.closeIcon} />
        </TouchableHighlight>

        <Image source={imgSrc} />

        <AirbnbRating
          defaultRating={5}
          onFinishRating={value => this.changeRating(value)}
          size={32}
        />

        <View style={styles.inputBlock}>
          <AutoGrowingTextInput
            enableScrollToCaret
            maxHeight={135}
            minHeight={45}
            onChangeText={str => this.changeComment(str)}
            placeholder="Your comment"
            style={styles.input}
          />
          <TouchableHighlight
            onPress={() => onSend(this.state.comment, this.state.rating)}
            underlayColor={_transparent}
          >
            <Image source={SEND} style={styles.inputSend} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const _transparent = 'transparent';
