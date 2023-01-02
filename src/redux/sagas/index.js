import { all , fork } from 'redux-saga/effects';
import axios from 'axios';

import userSaga from './user';

axios.defaults.baseURL= 'http://localhost:3085';

export default function* rootSaga() {
  yield all([
    fork(userSaga),
  ])
}