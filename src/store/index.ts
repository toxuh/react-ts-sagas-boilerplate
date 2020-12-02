import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';

import usersSagas from '../common/Users/saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, ...getDefaultMiddleware()],
});

sagaMiddleware.run(usersSagas);

export default store;
