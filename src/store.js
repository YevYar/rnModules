/**
 * This is a Redux store of the app.
 *
 * @format
 * @flow
 */

import { applyMiddleware, createStore } from 'redux';

// import rootMiddleware from './middlewares/rootMiddleware';
import rootReducer from './reducers/rootReducer';

import watchFetchProducts from './middlewares/catalogueMiddleware';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFetchProducts);

// rootMiddleware.run(watchFetchProducts);

export default store;
