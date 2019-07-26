/**
 * This module contains the HOC creator.
 *
 * @format
 */

import { connect } from 'react-redux';

export default (container, stateProps, dispatchProps) =>
  connect(
    stateProps,
    dispatchProps,
  )(container);
