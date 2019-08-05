/**
 * This screen (or page) presents the product list.
 *
 * @format
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View } from 'react-native';

import ProductRow from './components/ProductRow';
import ScreenActivityIndicator from '../commonComponents/ScreenActivityIndicator';
import styles from './ProductsScreenStyles';

const ProductsScreen = ({
  goTo,
  isProductsLoadingFinished,
  openProductInfo,
  products
}) => {
  const content = isProductsLoadingFinished ? (
    <FlatList
      data={products}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <ProductRow
          image={item.img}
          onPress={() => {
            openProductInfo(item.id);
            goTo();
          }}
          text={item.brief}
          title={item.title}
        />
      )}
      style={styles.list}
    />
  ) : (
    <ScreenActivityIndicator />
  );
  return <View style={styles.page}>{content}</View>;
};

ProductsScreen.propTypes = {
  goTo: PropTypes.func.isRequired,
  isProductsLoadingFinished: PropTypes.bool.isRequired,
  openProductInfo: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
};

export default ProductsScreen;
