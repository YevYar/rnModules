/**
 * This service contains the deeplinking logic.
 *
 * @format
 */

import { createDeepLinkingHandler } from 'react-native-deep-link';
import { navigate } from './NavigationService';

const handleOpenProduct = ({ params: { productId } }) => ({openProductInfoFromTheLink}) => {
  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
  console.log(productId);
  // addCurrentUserToChannel is a redux-thunk action,
  // which was defined somewhere in the code.

  openProductInfoFromTheLink(Number.parseInt(productId, 10));
  navigate('About');
};

const schemes = [
  {
    name: 'rnmodules:',
    routes: [
      {
        expression: '/products/:productId',
        callback: handleOpenProduct
      }
    ]
  },
  {
    name: 'http:',
    routes: [
      {
        expression: 'rnmodules/products/:productId',
        callback: handleOpenProduct
      }
    ]
  }
];

export default createDeepLinkingHandler(schemes);
