/**
 * This module contains actions related to the product list
 *
 * @format
 * @flow
 */

import {
  FETCH_PRODUCTS_REQUESTED,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_SUCCESS,
  OPEN_PRODUCT_INFO,
} from './types';

export function fetchProducts() {
  return { type: FETCH_PRODUCTS_REQUESTED };
}

export function fetchProductsFail() {
  return { type: FETCH_PRODUCTS_FAIL };
}

export function fetchProductsSuccess(products: Array<Object>) {
  return { type: FETCH_PRODUCTS_SUCCESS, products };
}

export function openProductInfo(id: number) {
  return { type: OPEN_PRODUCT_INFO, id };
}
