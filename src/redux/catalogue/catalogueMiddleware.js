/**
 * This module contains middleware that executes all functions related to the product catalogue.
 *
 * @format
 */

import { call, put } from 'redux-saga/effects';

import {
  cacheProducts,
  getCachedProducts,
  removeCachedProducts
} from '../../services/DatabaseService/DatabaseService';
import { fetchProducts } from '../../services/ServerApiService';
import {
  fetchProductsFail,
  fetchProductsSuccess,
  openProductInfoFromTheLinkFail,
  openProductInfoFromTheLinkSuccess
} from './catalogueActions';
import showErrorMessage from '../../utils/showErrorMessage';
import {
  transformProductsArray,
  transformRealmObject
} from '../../utils/products&CommentsTransformer';

const CACHED_PRODUCT_LIST_MESSAGE =
  "We can't get data from the server. Cached data will be shown.";
const ERROR_TITLE = 'Something has gone wrong';
const FETCH_CATALOGUE_FAIL_MESSAGE = "We can't get the product list.";
const OPEN_PRODUCT_INFO_FROM_THE_LINK_FAIL_MESSAGE =
  "We can't get the product info.";

export function* onFetchProducts() {
  try {
    const response = yield call(fetchProducts);
    transformProductsArray(response.data);
    yield put(fetchProductsSuccess(response.data));
    try {
      yield call(removeCachedProducts);
      yield call(cacheProducts, response.data);
    } catch (error) {
      console.log(`fetchProducts caching error: ${error}`);
    }
  } catch (error) {
    console.log(`fetchProducts error: ${error}`);

    try {
      const response = yield call(getCachedProducts);
      const data = transformRealmObject(response);

      if (!data.length) throw new Error("Nothing hasn't been cached");

      showErrorMessage(ERROR_TITLE, CACHED_PRODUCT_LIST_MESSAGE);
      yield put(fetchProductsSuccess(data));
    } catch (err) {
      console.log(`fetchProducts getting cache error: ${err}`);
      showErrorMessage(ERROR_TITLE, FETCH_CATALOGUE_FAIL_MESSAGE);
      yield put(fetchProductsFail());
    }
  }
}

// This function do the same to the onFetchProducts, because our API doesn't allow to get info about only one product
export function* onOpenProductInfoFromTheLink() {
  try {
    const response = yield call(fetchProducts);
    transformProductsArray(response.data);
    yield put(fetchProductsSuccess(response.data));
    try {
      yield call(removeCachedProducts);
      yield call(cacheProducts, response.data);
    } catch (error) {
      console.log(`openProductInfoFromTheLink caching error: ${error}`);
    }
    yield put(openProductInfoFromTheLinkSuccess());
  } catch (error) {
    console.log(`openProductInfoFromTheLink error: ${error}`);

    try {
      const response = yield call(getCachedProducts);
      const data = transformRealmObject(response);

      if (!data.length) throw new Error("Nothing hasn't been cached");

      showErrorMessage(ERROR_TITLE, CACHED_PRODUCT_LIST_MESSAGE);
      yield put(fetchProductsSuccess(data));
      yield put(openProductInfoFromTheLinkSuccess());
    } catch (err) {
      console.log(`openProductInfoFromTheLink getting cache error: ${err}`);
      showErrorMessage(
        ERROR_TITLE,
        OPEN_PRODUCT_INFO_FROM_THE_LINK_FAIL_MESSAGE
      );
      yield put(openProductInfoFromTheLinkFail());
    }
  }
}
