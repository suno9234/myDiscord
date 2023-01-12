import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';


import reducer from '../redux/reducers';
import rootSaga from './sagas';

const persisConfig = {
  key: 'root',
  storage,
};

const myPersistRecuder = persistReducer(persisConfig, reducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer, //  : myPersistRecuder,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
