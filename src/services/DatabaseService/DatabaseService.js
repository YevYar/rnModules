/**
 * This service contains functions for getting cached data from the DB.
 *
 * @format
 */

import Realm from './RealmStructure';

export const cacheProductComments = (productId, comments) => {
  Realm.write(() => {
    const product = Realm.create('ProductCommentsList', {
      productId,
      comments: []
    });
    console.log(product);
    comments.map((item) => {
      product.comments.push({ ...item });
    });
  });
  // product.comments.push({ make: 'Honda', model: 'Accord', miles: 1500 });
};

export const cacheProducts = (products) => {
  products.map((item) => {
    // const { id, title, text, brief, img } = item;
    Realm.write(() => {
      Realm.create('Product', { ...item });
    });
  });
};

export const getCachedProductComments = productId =>
  Realm.objects('ProductCommentsList').filtered(`productId == ${productId}`);

export const getCachedProducts = () => Realm.objects('Product');

export const removeCachedProductComments = (productId) => {
  Realm.write(() => {
    const productComments = Realm.objects('ProductCommentsList').filtered(`productId == ${productId}`);
    Realm.delete(productComments);
  });
};

export const removeCachedProducts = () => {
  Realm.write(() => {
    const products = Realm.objects('Product');
    Realm.delete(products);
  });
};
