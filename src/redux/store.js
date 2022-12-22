import { configureStore } from '@reduxjs/toolkit';
import reducer from '../redux/reducers';

export const store = configureStore({
  reducer,
  middleware:[],
});
