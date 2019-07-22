/**
 * This is a Redux store of the app.
 *
 * @format
 * @flow
 */

import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/rootReducer';
import rootSaga from './middlewares/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
