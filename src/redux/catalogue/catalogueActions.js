/**
 * This module contains actions related to the product list
 *
 * @format
 */

export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL';
export const FETCH_PRODUCTS_REQUESTED = 'FETCH_PRODUCTS_REQUESTED';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const OPEN_PRODUCT_INFO = 'OPEN_PRODUCT_INFO';

export const fetchProducts = () => ({ type: FETCH_PRODUCTS_REQUESTED });

export const fetchProductsFail = () => ({ type: FETCH_PRODUCTS_FAIL });

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  products,
});

export const openProductInfo = id => ({ type: OPEN_PRODUCT_INFO, id });
