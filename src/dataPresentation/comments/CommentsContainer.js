/**
 * This container contains all the functions and data to dispatch them to the CommentsScreen.
 *
 * @format
 */

import React from 'react';

import CommentsScreen from './CommentsScreen';

/* Screen requires changeCommentInputVisibility, comments, dateTimeFormat, fetchProductComments, isCommentInputVisible,
    isCommentsLoadingFinished, isCommentsLoadedWithoutErrors, isLogged, postComment */
export default props => <CommentsScreen {...props} />;
