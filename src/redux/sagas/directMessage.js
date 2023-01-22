import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { changeMiddleMenuState } from '../reducers/user';
import {
  loadDirectMessageRequest, loadDirectMessageSuccess, loadDirectMessageFailure,
  postMessageRequest, postMessageSuccess, postMessageFailure,
} from '../reducers/directMessage';

function loadDirectMessageAPI(data) {
  return axios.get(`/directMessage/loadPrivate/${data.receiverId}`);
}

function* loadDirectMessage(action) {
  console.log(action.payload);
  try {
    const result = yield call(loadDirectMessageAPI, action.payload);
    yield put(loadDirectMessageSuccess(result.data));
    yield put(changeMiddleMenuState({ id: result.data.receiver.id }))
  } catch (err) {
    yield put(loadDirectMessageFailure({ error: err }));
  }
}

function postMessageAPI(data) {
  return axios.post(`/directMessage/${data.serverId}`, data);
}

function* myPostMessage(action) {
  console.log(action.payload);
  try {
    const result = yield call(postMessageAPI, action.payload);
    yield put(postMessageSuccess(result.data));
  } catch (err) {
    yield put(postMessageFailure({ error: err }));
  }
}

function* watchLoadDirectMessage() {
  yield takeLatest(loadDirectMessageRequest, loadDirectMessage);
}
function* watchPostMessage() {
  yield takeLatest(postMessageRequest, myPostMessage);
}

export default function* directMessageSaga() {
  yield all([
    fork(watchLoadDirectMessage),
    fork(watchPostMessage),
  ])
}