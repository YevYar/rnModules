/**
 * This HOC contains all action creators and store's data to send via props to CommentsContainer.
 *
 * @format
 */

import CommentsContainer from './CommentsContainer';
import {
  changeCommentInputVisibility,
  fetchProductComments,
  postComment,
} from '../../redux/comment/commentActions';
import createHOC from '../../utils/hocCreator';

const mapStateToProps = state => ({
  comments:
    // comments don't mutate in the presentation component, so I can get they by reference
    state.commentsState.domainData.comments[
      `product_${state.catalogueState.appState.selectedProduct}`
    ],
  isCommentInputVisible: state.commentsState.uiState.isCommentInputVisible,
  isCommentsLoadedWithoutErrors:
    state.commentsState.appState.isCommentsLoadedWithoutErrors,
  isCommentsLoadingFinished:
    state.commentsState.appState.isCommentsLoadingFinished,
  isLogged: state.userState.appState.isLogged,
});

const mapDispatchToProps = {
  changeCommentInputVisibility,
  fetchProductComments,
  postComment,
};

export default createHOC(
  CommentsContainer,
  mapStateToProps,
  mapDispatchToProps,
);
