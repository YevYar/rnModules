/**
 * This component presents the single comment.
 *
 * @format
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'react-native-ratings';
import { Text, View } from 'react-native';

import styles from './styles/CommentStyles';

const Comment = ({ dateTime, dateTimeFormat, name, rating, text }) => {
  let date = new Date(dateTime);
  date = date.toLocaleString('en-UK', dateTimeFormat);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.time}>{date}</Text>
      </View>
      <Rating fractions={0} imageSize={20} readonly startingValue={rating} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

Comment.propTypes = {
  dateTime: PropTypes.string.isRequired,
  dateTimeFormat: PropTypes.object,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

Comment.defaultProps = {
  dateTimeFormat: {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'short',
    timezone: 'UTC',
    hour: 'numeric',
    hour12: false,
    minute: 'numeric'
  }
};

export default Comment;
