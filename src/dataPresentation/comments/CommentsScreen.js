/**
 * This screen (or page) presents comments about the selected product.
 *
 * @format
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import {
  Alert,
  FlatList,
  Image,
  RefreshControl,
  TouchableHighlight,
  View
} from 'react-native';

import Comment from './components/Comment';
import CommentInput from './components/CommentInput';
import ScreenActivityIndicator from '../commonComponents/ScreenActivityIndicator';
import images from '../../constants/images';
import styles from './CommentsScreenStyles';

const { ADD_COMMENT } = images;

export default class CommentsScreen extends Component {
  static propTypes = {
    changeCommentInputVisibility: PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired,
    dateTimeFormat: PropTypes.object,
    fetchProductComments: PropTypes.func.isRequired,
    isCommentInputVisible: PropTypes.bool.isRequired,
    isCommentsLoadedWithoutErrors: PropTypes.bool.isRequired,
    isCommentsLoadingFinished: PropTypes.bool.isRequired,
    isLogged: PropTypes.bool.isRequired,
    postComment: PropTypes.func.isRequired
  };

  static defaultProps = { dateTimeFormat: undefined };

  state = { isCommentInputVisible: false };

  changeModalVisibility(value) {
    this.setState({ isCommentInputVisible: value });
  }

  render() {
    const {
      changeCommentInputVisibility,
      comments,
      dateTimeFormat,
      fetchProductComments,
      isCommentInputVisible,
      isCommentsLoadingFinished,
      isCommentsLoadedWithoutErrors,
      isLogged,
      postComment
    } = this.props;

    if (isCommentsLoadingFinished) {
      const addButton = isCommentsLoadedWithoutErrors ? (
        <TouchableHighlight
          onPress={() => {
            if (isLogged) {
              this.changeModalVisibility(true);
              changeCommentInputVisibility(true);
            } else Alert.alert('Only logged in users can add comments.');
          }}
          style={styles.addButtonBlock}
        >
          <Image source={ADD_COMMENT} style={styles.addButton} />
        </TouchableHighlight>
      ) : null;

      return (
        <View style={styles.page}>
          <FlatList
            data={comments}
            keyExtractor={item => item.id.toString()}
            refreshControl={
              <RefreshControl
                refreshing={!isCommentsLoadingFinished}
                onRefresh={() => fetchProductComments()}
              />
            }
            renderItem={({ item }) => (
              <Comment
                dateTime={item.created_at}
                dateTimeFormat={dateTimeFormat}
                name={item.created_by.username}
                rating={item.rate}
                text={item.text}
              />
            )}
            style={styles.list}
          />
          {addButton}
          <Modal
            isVisible={
              isCommentInputVisible === this.state.isCommentInputVisible
                ? isCommentInputVisible
                : false
            }
          >
            <CommentInput
              onClosePress={() => {
                this.changeModalVisibility(false);
                changeCommentInputVisibility(false);
              }}
              onSend={(comment, rating) => postComment(comment, rating)}
            />
          </Modal>
        </View>
      );
    }
    return (
      <View style={styles.page}>
        <ScreenActivityIndicator />
      </View>
    );
  }
}
