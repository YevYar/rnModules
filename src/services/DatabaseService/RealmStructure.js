/**
 * This service contains objects that will be used in realm schema.
 *
 * @format
 */

import Realm from 'realm';

class Product extends Realm.Object {}
Product.schema = {
  name: 'Product',
  primaryKey: 'id',
  properties: {
    id: 'int',
    title: 'string',
    text: 'string',
    image: 'string'
  }
};

class Comment extends Realm.Object {}
Comment.schema = {
  name: 'Comment',
  primaryKey: 'id',
  properties: {
    id: 'int',
    dateTime: 'string',
    name: 'string',
    rating: 'int',
    text: 'string'
  }
};

class ProductCommentsList extends Realm.Object {}
ProductCommentsList.schema = {
  name: 'ProductCommentsList',
  primaryKey: 'productId',
  properties: {
    productId: 'int',
    comments: 'Comment[]'
  }
};

export default new Realm({ schema: [Comment, Product, ProductCommentsList] });
