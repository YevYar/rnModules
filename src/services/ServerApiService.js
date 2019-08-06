/**
 * This service contains the axios api client for connecting to the server.
 *
 * @format
 */

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://smktesting.herokuapp.com/api/',
  timeout: 1000,
  headers: { Authorization: '' }
});

export const fetchProductComments = id => instance.get(`reviews/${id}`);

export const fetchProducts = () => instance.get('products/');

export const login = (username, password) =>
  instance.post('login/', { username, password });

export const postComment = (comment, productId, rating) =>
  instance.post(`reviews/${productId}`, {
    rate: rating,
    text: comment
  });

export const register = (username, password) =>
  instance.post('register/', {
    username,
    password
  });

/**
 * This function updates the header for server requests.
 * It only adds Authorization header now.
 */
export const updateHeaders = (token) => {
  if (token === '') {
    instance.defaults.headers.Authorization = '';
  } else {
    instance.defaults.headers.Authorization = `Token ${token}`;
  }
};
