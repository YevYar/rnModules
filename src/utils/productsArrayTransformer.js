/**
 * This module contains the function for transforming product array from the server.
 *
 * @format
 */

const imgUrl = 'http://smktesting.herokuapp.com/static/';

export default (productsArray) => {
  productsArray.forEach((element) => {
    /** ***************************
     * get full path to an image *
     **************************** */
    element.img = imgUrl + element.img;

    /** ****************************************************************************************
     * get a brief text (first sentence) from the full text to present it in the product list *
     ***************************************************************************************** */
    let end = element.text.indexOf('.');
    if (end === -1) {
      end = element.text.length;
    }
    element.brief = element.text.substring(0, end);
  });
};
