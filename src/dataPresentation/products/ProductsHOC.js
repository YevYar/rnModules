/**
 * This HOC contains all action creators and store's data to send via props to ProductsContainer.
 *
 * @format
 */

import ProductsContainer from './ProductsContainer';
import createHOC from '../../utils/hocCreator';
import { openProductInfo } from '../../redux/catalogue/catalogueActions';

const mapStateToProps = (state, ownProps) => ({
  goTo: () => ownProps.navigation.navigate('About'),
  isProductsLoadingFinished:
    state.catalogueState.appState.isProductsLoadingFinished,
  // products don't mutate in the presentation component, so I can get they by reference
  products: state.catalogueState.domainData.products
});

const mapDispatchToProps = { openProductInfo };

export default createHOC(
  ProductsContainer,
  mapStateToProps,
  mapDispatchToProps
);
