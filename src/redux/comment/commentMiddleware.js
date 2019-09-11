/**
 * This module contains middleware that executes all functions related to the comments.
 *
 * @format
 */

import { call, put, select } from 'redux-saga/effects';

import {
  cacheProductComments,
  getCachedProductComments,
  removeCachedProductComments
} from '../../services/DatabaseService/DatabaseService';
import {
  fetchProductComments,
  postComment
} from '../../services/ServerApiService';
import {
  fetchProductCommentsFail,
  fetchProductCommentsSuccess,
  postCommentFail,
  postCommentSuccess,
  setCommentsLoadedToFalse
} from './commentActions';
import { transformRealmObject } from '../../utils/products&CommentsTransformer';
import { getCurrentProduct } from '../catalogue/catalogueSelector';
import showErrorMessage from '../../utils/showErrorMessage';

const CACHED_COMMENT_LIST_MESSAGE =
  "We can't get the product comments list from the server. Cached comments will be shown.";
const ERROR_TITLE = 'Something has gone wrong';
const FETCH_COMMENTS_FAIL_MESSAGE = "We can't get a list of product comments.";
const POST_COMMENT_FAIL_MESSAGE = "We can't post your comment.";

const _sortCommentsByDate = (comments) => {
  /** ******************************************************
   * sort product comments by date (the newest in the top) *
   ******************************************************* */
  comments.sort((a, b) => {
    const aD = new Date(a.created_at);
    const bD = new Date(b.created_at);
    // eslint-disable-next-line no-nested-ternary
    return aD > bD ? -1 : bD > aD ? 1 : 0;
  });
};

export function* onFetchProductComments() {
  yield put(setCommentsLoadedToFalse());
  try {
    const id = yield select(getCurrentProduct);
    const response = yield call(fetchProductComments, id);

    if (response.data) {
      _sortCommentsByDate(response.data);
    } else response.data = [];

    yield put(fetchProductCommentsSuccess(id, response.data));
    try {
      yield call(removeCachedProductComments, id);
      yield call(cacheProductComments, id, response.data);
    } catch (error) {
      console.log(`fetchProductComments caching error: ${error}`);
    }
  } catch (error) {
    console.log(`fetchProductComments error: ${error}`);

    try {
      const id = yield select(getCurrentProduct);
      const response = yield call(getCachedProductComments, id);
      const transformedResponse = transformRealmObject(response);
      const data = transformRealmObject(transformedResponse[0].comments);
      console.log(response);
      console.log(data);

      if (!data.length) throw new Error("Nothing hasn't been cached");

      showErrorMessage(ERROR_TITLE, CACHED_COMMENT_LIST_MESSAGE);
      yield put(fetchProductCommentsSuccess(id, data));
    } catch (err) {
      console.log(`fetchProductComments getting cache error: ${err}`);
      showErrorMessage(ERROR_TITLE, FETCH_COMMENTS_FAIL_MESSAGE);
      yield put(fetchProductCommentsFail());
    }
    // throw error;
  }
}

export function* onPostComment(action) {
  const { comment, rating } = action;
  try {
    const productId = yield select(getCurrentProduct);
    const response = yield call(postComment, comment, productId, rating);
    if (response.data.success === true) {
      const newComment = {
        created_at: new Date().toString(),
        created_by: {},
        rate: rating,
        text: comment
      };
      yield put(postCommentSuccess(newComment));
    } else {
      showErrorMessage(POST_COMMENT_FAIL_MESSAGE);
      yield put(postCommentFail());
    }
  } catch (error) {
    console.log(`postComment error: ${error}`);
    showErrorMessage(POST_COMMENT_FAIL_MESSAGE);
    yield put(postCommentFail());
  }
}
