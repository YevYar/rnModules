/**
 * This module contains selector that selects data from catalogueState.
 *
 * @format
 */

export const getCurrentProduct = state =>
  state.catalogueState.appState.selectedProduct;
