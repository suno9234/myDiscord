import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import userSaga from './user';
import directMessageSaga from './directMessage';

axios.defaults.baseURL = 'http://localhost:3085';
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(directMessageSaga),
  ])
}