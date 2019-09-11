/**
 * This service contains objects that will be used in realm schema.
 *
 * @format
 */

import Realm from 'realm';

// class Product extends Realm.Object {}
const Product = {
  name: 'Product',
  properties: {
    id: 'int',
    title: 'string',
    text: 'string',
    brief: 'string',
    img: { type: 'string', default: '' }
  }
};

const created_by = {
  name: 'created_by',
  properties: { username: 'string' }
};

// class Comment extends Realm.Object {}
const Comment = {
  name: 'Comment',
  properties: {
    id: 'int',
    created_at: 'string',
    created_by: 'created_by',
    rate: 'int',
    text: 'string'
  }
};

// class ProductCommentsList extends Realm.Object {}
const ProductCommentsList = {
  name: 'ProductCommentsList',
  primaryKey: 'productId',
  properties: {
    productId: 'int',
    comments: 'Comment[]'
  }
};

/* let realm = null;
Realm.open({ schema: [Comment, Product, ProductCommentsList] }).then((db) => {
  realm = db;
  console.log(realm);
});

const RealmDB = realm; */

export default new Realm({ schema: [Comment, Product, ProductCommentsList, created_by] }); // RealmDB;
