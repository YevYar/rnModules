/**
 * This screen (or page) presents the product list.
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ProductRow from '../components/ProductRow';
import ScreenActivityIndicator from '../components/ScreenActivityIndicator';
import { screenBackground } from '../../constants/colors';

type Props = {
  goTo: Function,
  isProductsLoadingFinished: boolean,
  openProductInfo: Function,
  products: Array<Object>
};

export default function ProductsScreen(props: Props) {
  const { products } = props;
  const content = props.isProductsLoadingFinished ? (
    <FlatList
      data={products}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <ProductRow
          image={item.img}
          onPress={() => {
            props.openProductInfo(item.id);
            props.goTo();
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
}

const styles = StyleSheet.create({
  /** ******************
   * container styles *
   ******************* */
  list: {
    flex: 1,
  },
  page: {
    backgroundColor: screenBackground,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
