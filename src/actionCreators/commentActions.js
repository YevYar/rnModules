/**
 * This module contains actions related to comments.
 *
 * @format
 * @flow
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

export function changeCommentInputVisibility(isVisible: boolean) {
  return { type: CHANGE_COMMENT_INPUT_VISIBILITY, isVisible };
}

export function fetchProductComments(id: number) {
  return { type: FETCH_PRODUCT_COMMENTS_REQUESTED, id };
}

export function fetchProductCommentsFail() {
  return { type: FETCH_PRODUCT_COMMENTS_FAIL };
}

export function fetchProductCommentsSuccess(
  id: number,
  comments: Array<Object>,
) {
  return {
    type: FETCH_PRODUCT_COMMENTS_SUCCESS,
    id,
    comments,
  };
}

export function postComment(
  comment: string,
  productId: number,
  rating: number,
) {
  return {
    type: POST_COMMENT_REQUESTED,
    comment,
    productId,
    rating,
  };
}

export function postCommentFail() {
  return { type: POST_COMMENT_FAIL };
}

export function postCommentSuccess(newComment: Object) {
  return { type: POST_COMMENT_SUCCESS, newComment };
}

export function setCommentsLoadedToFalse() {
  return { type: SET_COMMENTS_NOT_LOADED };
}
