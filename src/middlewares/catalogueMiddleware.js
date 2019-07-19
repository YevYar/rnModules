/**
 * This module contains middleware that executes all functions related to the product catalogue.
 *
 * @format
 * @flow
 */

import { call, put, takeEvery } from 'redux-saga/effects';

import { FETCH_PRODUCTS_REQUESTED } from '../actionCreators/types';
import ServerApiService from '../services/ServerApiService';
import {
  fetchProductsFail,
  fetchProductsSuccess,
} from '../actionCreators/catalogueActions';
import showErrorMessage from './showErrorMessage';

const FETCH_CATALOGUE_FAIL_MESSAGE =
  "Something has gone wrong. We can't get the product list.";

const imgUrl = 'http://smktesting.herokuapp.com/static/';

export default function* watchFetchProducts() {
  console.log('watch');
  yield takeEvery(FETCH_PRODUCTS_REQUESTED, onFetchProducts);
}

export function* onFetchProducts() {
  console.log('onFetchProducts');
  try {
    const response = yield call(() => ServerApiService.fetchProducts());
    response.data.forEach((element) => {
      /** ***************************
       * get full path to an image *
       **************************** */
      element.img = imgUrl + element.img;

      /** ****************************************************************************************
       * get a brief text (first sentence) from the full text to present it in the product list *
       ***************************************************************************************** */
      let end = element.text.indexOf('.');
      if (end === -1) {
        end = element.text.length;
      }
      element.brief = element.text.substring(0, end);
    });
    yield put(fetchProductsSuccess(response.data));
  } catch (error) {
    console.log(`fetchProducts error: ${error}`);
    showErrorMessage(FETCH_CATALOGUE_FAIL_MESSAGE);
    yield put(fetchProductsFail());
  }

  /* return (dispatch: Function) =>
    apiClient
      .get('products/')
      .then((response) => {
        response.data.forEach((element) => {
          /** ***************************
           * get full path to an image *
           **************************** */
  /* element.img = imgUrl + element.img;

          /** ****************************************************************************************
           * get a brief text (first sentence) from the full text to present it in the product list *
           ***************************************************************************************** */
  /* let end = element.text.indexOf('.');
          if (end === -1) {
            end = element.text.length;
          }
          element.brief = element.text.substring(0, end);
        });
        dispatch(fetchProductsSuccess(response.data));
      })
      .catch((error) => {
        console.log(`fetchProducts error: ${error}`);
        showErrorMessage(FETCH_CATALOGUE_FAIL_MESSAGE);
        dispatch(fetchProductsFail());
        // throw error;
      }); */
}
