import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { changeMiddleMenuState } from '../reducers/user';
import {
  loadDirectMessageRequest, loadDirectMessageSuccess, loadDirectMessageFailure,
  loadChannelMessageRequest, loadChannelMessageSuccess, loadChannelMessageFailure,
  postMessageRequest, postMessageSuccess, postMessageFailure,
} from '../reducers/directMessage';

import { setLastSelectedChattingChannelId } from '../reducers/channel';

/* function loadChannelMessageAPI(data) {
  return axios.get(`/directMessages?receiverId=${data.receiverId}&lastId=${data.lastId || 0}`);
} */

function* loadChannelMessage(action) {
  console.log(action.payload);
  try {
    // const result = yield call(loadChannelMessageAPI, action.payload);
    const result = {
      data: {
        channelId: action.payload.channelId,
        messages:[
          {
            date:'1',
            User : 'Suno',
            comment : '테스트'
          }
        ]
      }
    }
    yield put(loadChannelMessageSuccess(result.data));
    yield put(setLastSelectedChattingChannelId({ channelId: action.payload.channelId }))
  } catch (err) {
    yield put(loadChannelMessageFailure({ error: err }));
  }
}


function loadDirectMessageAPI(data) {
  return axios.get(`/directMessages?receiverId=${data.receiverId}&lastId=${data.lastId || 0}`);
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

function* watchLoadChannelMessage() {
  yield takeLatest(loadChannelMessageRequest, loadChannelMessage);
}

function* watchLoadDirectMessage() {
  yield takeLatest(loadDirectMessageRequest, loadDirectMessage);
}
function* watchPostMessage() {
  yield takeLatest(postMessageRequest, myPostMessage);
}

export default function* directMessageSaga() {
  yield all([
    fork(watchLoadChannelMessage),
    fork(watchLoadDirectMessage),
    fork(watchPostMessage),
  ])
}