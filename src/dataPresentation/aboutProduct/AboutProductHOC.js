/**
 * This HOC contains all action creators and store's data to send via props to AboutProductContainer.
 *
 * @format
 */

import AboutProductContainer from './AboutProductContainer';
import createHOC from '../../utils/hocCreator';
import { fetchProductComments } from '../../redux/comment/commentActions';

const mapStateToProps = (state, ownProps) => {
  console.log('+++++++++++++++++++++++++++++');
  console.log(state);
  const data = state.catalogueState.domainData.products.find(x => x.id === state.catalogueState.appState.selectedProduct);
  return {
    goTo: () => ownProps.navigation.navigate('Comments'),
    isProductLoadingFinished:
      state.catalogueState.appState.isProductLoadingFinished,
    product: data || {} // not { ...data }, because data doesn't mutate in the presentation component
  };
};

const mapDispatchToProps = { fetchProductComments };

export default createHOC(
  AboutProductContainer,
  mapStateToProps,
  mapDispatchToProps
);
