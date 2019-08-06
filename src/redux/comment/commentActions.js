/**
 * This module contains actions related to comments.
 *
 * @format
 */

export const CHANGE_COMMENT_INPUT_VISIBILITY =
  'CHANGE_COMMENT_INPUT_VISIBILITY';
export const FETCH_PRODUCT_COMMENTS_FAIL = 'FETCH_PRODUCT_COMMENTS_FAIL';
export const FETCH_PRODUCT_COMMENTS_REQUESTED =
  'FETCH_PRODUCT_COMMENTS_REQUESTED';
export const FETCH_PRODUCT_COMMENTS_SUCCESS = 'FETCH_PRODUCT_COMMENTS_SUCCESS';
export const POST_COMMENT_FAIL = 'POST_COMMENT_FAIL';
export const POST_COMMENT_REQUESTED = 'POST_COMMENT_REQUESTED';
export const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS';
export const SET_COMMENTS_NOT_LOADED = 'SET_COMMENTS_NOT_LOADED';

export const changeCommentInputVisibility = isVisible => ({
  type: CHANGE_COMMENT_INPUT_VISIBILITY,
  isVisible
});

export const fetchProductComments = () => ({ type: FETCH_PRODUCT_COMMENTS_REQUESTED });

export const fetchProductCommentsFail = () => ({ type: FETCH_PRODUCT_COMMENTS_FAIL });

export const fetchProductCommentsSuccess = (id, comments) => ({
  type: FETCH_PRODUCT_COMMENTS_SUCCESS,
  id,
  comments
});

export const postComment = (comment, rating) => ({
  type: POST_COMMENT_REQUESTED,
  comment,
  rating
});

export const postCommentFail = () => ({ type: POST_COMMENT_FAIL });

export const postCommentSuccess = newComment => ({
  type: POST_COMMENT_SUCCESS,
  newComment
});

export const setCommentsLoadedToFalse = () => ({ type: SET_COMMENTS_NOT_LOADED });
