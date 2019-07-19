/**
 * This service contains the axios api client for connecting to the server.
 *
 * @format
 * @flow
 */

import axios from 'axios';

export default class ServerApiService {
  static instance = axios.create({
    baseURL: 'http://smktesting.herokuapp.com/api/',
    timeout: 1000,
    headers: { Authorization: '' },
  });

  static getApiService() {
    return this.instance;
  }

  static fetchProducts() {
    return this.instance.get('products/');
  }

  static login(username: string, password: string) {
    return this.instance.post('login/', { username, password });
  }

  /**
   * This function updates the header for server requests.
   * It only adds Authorization header now.
   */
  static updateHeaders(token: string) {
    if (token === '') {
      ServerApiService.instance.defaults.headers.Authorization = '';
    } else {
      ServerApiService.instance.defaults.headers.Authorization = `Token ${token}`;
    }
  }
}
