/**
 * This container contains all the functions and data to dispatch them to the ProductsScreen.
 *
 * @format
 */

import React from 'react';

import ProductsScreen from './ProductsScreen';

// Screen requires goTo, isProductsLoadingFinished, openProductInfo, products
export default props => <ProductsScreen {...props} />;
