/**
 * This module contains middleware that executes all functions related to the product catalogue.
 *
 * @format
 */

import { call, put } from 'redux-saga/effects';

import {
  cacheProducts,
  getCachedProducts
} from '../../services/DatabaseService/DatabaseService';
import { fetchProducts } from '../../services/ServerApiService';
import {
  fetchProductsFail,
  fetchProductsSuccess,
  openProductInfoFromTheLinkFail,
  openProductInfoFromTheLinkSuccess
} from './catalogueActions';
import showErrorMessage from '../../utils/showErrorMessage';
import transformProductsArray from '../../utils/productsArrayTransformer';

const FETCH_CATALOGUE_FAIL_MESSAGE =
  "Something has gone wrong. We can't get the product list.";
const OPEN_PRODUCT_INFO_FROM_THE_LINK_FAIL_MESSAGE =
  "Something has gone wrong. We can't get the product info.";

export function* onFetchProducts() {
  try {
    const response = yield call(fetchProducts);
    transformProductsArray(response.data);
    yield put(fetchProductsSuccess(response.data));
    yield call(cacheProducts, response.data);
  } catch (error) {
    console.log(`fetchProducts error: ${error}`);
    showErrorMessage(FETCH_CATALOGUE_FAIL_MESSAGE);
    // yield put(fetchProductsFail());
    const response = yield call(getCachedProducts);
    console.log(response);
    // transformProductsArray(response.data);
    // yield put(fetchProductsSuccess(response.data));
  }
}

// This function do the same to the onFetchProducts, because our API doesn't allow to get info about only one product
export function* onOpenProductInfoFromTheLink() {
  try {
    const response = yield call(fetchProducts);
    transformProductsArray(response.data);
    yield put(fetchProductsSuccess(response.data));
    yield put(openProductInfoFromTheLinkSuccess());
  } catch (error) {
    console.log(`openProductInfoFromTheLink error: ${error}`);
    showErrorMessage(OPEN_PRODUCT_INFO_FROM_THE_LINK_FAIL_MESSAGE);
    yield put(openProductInfoFromTheLinkFail());
  }
}
