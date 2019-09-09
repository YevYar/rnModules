/**
 * This module contains actions related to the product list.
 *
 * @format
 */

export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL';
export const FETCH_PRODUCTS_REQUESTED = 'FETCH_PRODUCTS_REQUESTED';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const OPEN_PRODUCT_INFO = 'OPEN_PRODUCT_INFO';
export const OPEN_PRODUCT_INFO_FROM_THE_LINK_FAIL =
  'OPEN_PRODUCT_INFO_FROM_THE_LINK_FAIL';
export const OPEN_PRODUCT_INFO_FROM_THE_LINK_REQUESTED =
  'OPEN_PRODUCT_INFO_FROM_THE_LINK_REQUESTED';
export const OPEN_PRODUCT_INFO_FROM_THE_LINK_SUCCESS =
  'OPEN_PRODUCT_INFO_FROM_THE_LINK_SUCCESS';

export const fetchProducts = () => ({ type: FETCH_PRODUCTS_REQUESTED });

export const fetchProductsFail = () => ({ type: FETCH_PRODUCTS_FAIL });

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  products
});

export const openProductInfo = id => ({ type: OPEN_PRODUCT_INFO, id });

export const openProductInfoFromTheLink = id => ({
  type: OPEN_PRODUCT_INFO_FROM_THE_LINK_REQUESTED,
  id
});

export const openProductInfoFromTheLinkFail = () => ({type: OPEN_PRODUCT_INFO_FROM_THE_LINK_FAIL});

export const openProductInfoFromTheLinkSuccess = () => ({type: OPEN_PRODUCT_INFO_FROM_THE_LINK_SUCCESS});
