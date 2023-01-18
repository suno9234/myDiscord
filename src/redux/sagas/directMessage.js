import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { loadDirectMessageRequest, loadDirectMessageSuccess, loadDirectMessageFailure } from '../reducers/directMessage';

function loadDirectMessageAPI(data) {
  return axios.get(`/directMessage/loadPrivate/${data.receiverId}`);
}

function* loadDirectMessage(action) {
  console.log(action.payload);
  try {
    const result = yield call(loadDirectMessageAPI, action.payload);
    console.log(result);
    yield put(loadDirectMessageSuccess(result.data));
  } catch (err) {
    yield put(loadDirectMessageFailure({ error: err }));
  }
}

function* watchLoadDirectMessage() {
  yield takeLatest(loadDirectMessageRequest, loadDirectMessage);
}

export default function* directMessageSaga() {
  yield all([
    fork(watchLoadDirectMessage),
  ])
}