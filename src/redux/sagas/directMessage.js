import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { changeMiddleMenuState, enterHomeSuccess } from '../reducers/user';
import {
  loadDirectMessageRequest, loadDirectMessageSuccess, loadDirectMessageFailure,
  loadChannelMessageRequest, loadChannelMessageSuccess, loadChannelMessageFailure,
  postMessageRequest, postMessageSuccess, postMessageFailure,
  loadDirectMessageListRequest, loadDirectMessageListSuccess, loadDirectMessageListFailure, removeDirectMessageCardRequest, removeDirectMessageCardSuccess, removeDirectMessageCardFailure,
} from '../reducers/directMessage';

import { setLastSelectedChattingChannelId } from '../reducers/channel';
import shortid from 'shortid';
import { faker } from '@faker-js/faker';


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
        messages: [
          {
            date: '1',
            User: 'Suno',
            comment: '테스트'
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

const dummyCards = Array(15).fill().map((v) => ({
  id: shortid.generate(),
  nickname: faker.name.fullName(),
  tag: Math.floor(Math.random() * (9999 - 1000)) + 1000,
  profileImage : faker.image.avatar(),
}))


function* loadDirectMessageList(action) {
  console.log(action.payload);
  try {
    /* const result = yield call(loadDirectMessageAPI, action.payload); */
    yield put(loadDirectMessageListSuccess(dummyCards));
  } catch (err) {
    yield put(loadDirectMessageListFailure({ error: err }));
  }
}


/* function loadDirectMessageAPI(data) {
  return axios.get(`/directMessages?receiverId=${data.receiverId}&lastId=${data.lastId || 0}`);
} */


function* loadDirectMessage(action) {
  console.log(action.payload);
  const dummyDirectMessage = {
    receiver: {
      id: action.payload.receiverId,
      nickname: action.payload.receiverNickname,
      tag: action.payload.receiverTag,
      profileImage : action.payload.profileImage,
    },
    channelId: shortid.generate(),
    messages: [
      {
        id : 7,
        User : {
          id : action.payload.receiverId,
          nickname : action.payload.receiverNickname,
          tag : action.payload.receiverTag,
        },
        createdAt : '2023-02-01T18:36:30',
        content :  faker.lorem.sentence(),
      },
      {
        id : 6,
        User : {
          id : 1,
          nickname : 'Suno',
          tag : 6600,
        },
        createdAt : '2023-02-01T18:33:33',
        content :  faker.lorem.sentence(),
      },
      {
        id : 5,
        User : {
          id : 1,
          nickname : 'Suno',
          tag : 6600,
        },
        createdAt : '2023-02-01T18:32:31',
        content :  faker.lorem.sentence(),
      },
      {
        id : 4,
        User : {
          id : action.payload.receiverId,
          nickname : action.payload.receiverNickname,
          tag : action.payload.receiverTag,
        },
        createdAt : '2023-02-01T18:32:30',
        content :  faker.lorem.sentence(),
      },
      {
        id : 3,
        User : {
          id : action.payload.receiverId,
          nickname : action.payload.receiverNickname,
          tag : action.payload.receiverTag,
        },
        createdAt : '2023-02-01T18:32:25',
        content :  faker.lorem.sentence(),
      },
      {
        id : 2,
        User : {
          id : action.payload.receiverId,
          nickname : action.payload.receiverNickname,
          tag : action.payload.receiverTag,
        },
        createdAt : '2023-02-01T18:32:15',
        content :  faker.lorem.sentence(),
      },
      {
        id : 1,
        User : {
          id : action.payload.receiverId,
          nickname : action.payload.receiverNickname,
          tag : action.payload.receiverTag,
        },
        createdAt : '2023-02-01T18:32:10',
        content : faker.lorem.sentence(),
      },
      {
        id : 0,
        User : {
          id : action.payload.receiverId,
          nickname : action.payload.receiverNickname,
          tag : action.payload.receiverTag,
        },
        createdAt : '2023-02-01T18:32:00',
        content : faker.lorem.sentence(),
      },
    ],
  }
  try {
    // const result = yield call(loadDirectMessageAPI, action.payload); action(result.data)
    yield put(loadDirectMessageSuccess(dummyDirectMessage));
    yield put(changeMiddleMenuState({ id: dummyDirectMessage.receiver.id }))
  } catch (err) {
    yield put(loadDirectMessageFailure({ error: err }));
  }
}

/* function postMessageAPI(data) {
  return axios.post(`/directMessage/${data.serverId}`, data);
} */

function* myPostMessage(action) {
  console.log(action.payload);
  try {
    /* const result = yield call(postMessageAPI, action.payload); action(result.data) */
    const today = new Date();
    const result = {
      data : {
        User : {
          id : 1,
          nickname : 'Suno',
          tag : 6600,
        },
        content : action.payload.content,
        createdAt : today.toLocaleString(),
      }
    }
    yield put(postMessageSuccess(result.data));
  } catch (err) {
    yield put(postMessageFailure({ error: err }));
  }
}

function* removeDirectMessageCard(action) {
  console.log(action.payload);
  try {
    // const result = yield call(postMessageAPI, action.payload);
    yield put(removeDirectMessageCardSuccess({ userId: action.payload.userId }));
    yield put(enterHomeSuccess());
  } catch (err) {
    yield put(removeDirectMessageCardFailure({ error: err }));
  }
}

function* watchRemoveDirectMessageCard() {
  yield takeLatest(removeDirectMessageCardRequest, removeDirectMessageCard);
}
function* watchLoadChannelMessage() {
  yield takeLatest(loadChannelMessageRequest, loadChannelMessage);
}

function* watchLoadDirectMessageList() {
  yield takeLatest(loadDirectMessageListRequest, loadDirectMessageList);
}
function* watchLoadDirectMessage() {
  yield takeLatest(loadDirectMessageRequest, loadDirectMessage);
}
function* watchPostMessage() {
  yield takeLatest(postMessageRequest, myPostMessage);
}

export default function* directMessageSaga() {
  yield all([
    fork(watchRemoveDirectMessageCard),
    fork(watchLoadChannelMessage),
    fork(watchLoadDirectMessageList),
    fork(watchLoadDirectMessage),
    fork(watchPostMessage),
  ])
}