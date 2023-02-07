import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import axios from 'axios';
import { faker } from "@faker-js/faker";
import shortid from "shortid";

import {
  enterHomeSuccess, enterServerSuccess,
  signUpRequest, signUpSuccess, signUpFailure,
  logInRequest, logInSuccess, logInFailure,
  addFriendRequest, addFriendSuccess, addFriendFailure,
  loadFriendsRequest, loadFriendsSuccess, loadFriendsFailure,
  loadWaitingFriendsRequest, loadWaitingFriendsSuccess, loadWaitingFriendsFailure,
  acceptFriendRequest, acceptFriendSuccess, acceptFriendFailure,
  cancelFriendRequest, cancelFriendSuccess, cancelFriendFailure,
  refuseFriendRequest, refuseFriendSuccess, refuseFriendFailure,
} from '../reducers/user';

const dummyWaitingFriends = {
  receivers: Array(10).fill().map((v, i) => ({
    id: shortid.generate(),
    nickname: faker.name.fullName(),
    tag: Math.floor(Math.random() * (9999 - 1000)) + 1000,
    profileImage: faker.image.avatar(),
  })),
  senders: Array(10).fill().map((v, i) => ({
    id: shortid.generate(),
    nickname: faker.name.fullName(),
    tag: Math.floor(Math.random() * (9999 - 1000)) + 1000,
    profileImage: faker.image.avatar(),
  }))
}

const state = ['online', 'offline'];
const dummyUsers = Array(20).fill().map((v, i) => ({
  id: shortid.generate(),
  nickname: faker.name.fullName(),
  tag: Math.floor(Math.random() * (9999 - 1000)) + 1000,
  profileImage: faker.image.avatar(),
  state: state[Math.floor(Math.random() * 2)]
}))

/* function acceptFriendAPI(data) {
  return axios.post(`/user/acceptFriend/${data.senderId}`);
} */

function* acceptFriend(action) {
  try {
    /* const result = yield call(acceptFriendAPI, action.payload); action(result.data) */
    const userInfo = dummyWaitingFriends.senders.filter((v) => v.id === action.payload.senderId)[0]
    yield put(acceptFriendSuccess({
      senderId: userInfo.id,
      nickname: userInfo.nickname,
      tag: userInfo.tag,
      profileImage: userInfo.profileImage,
    }));
  } catch (err) {
    yield put(acceptFriendFailure({ error: err }));
  }
}

/* function refuseFriendAPI(data) {
  return axios.delete(`/user/friendRequest/sender/${data.senderId}`);
} */

function* refuseFriend(action) {
  try {
    /* const result = yield call(refuseFriendAPI, action.payload); action(result.data) */
    yield put(refuseFriendSuccess({ senderId: action.payload.senderId }));
  } catch (err) {
    yield put(refuseFriendFailure({ error: err }));
  }
}

/* function cancelFriendAPI(data) {
  return axios.delete(`/user/friendRequest/receiver/${data.receiverId}`);
} */

function* cancelFriend(action) {
  try {
    /* const result = yield call(cancelFriendAPI, action.payload); */
    yield put(cancelFriendSuccess({ receiverId: action.payload.receiverId }));
  } catch (err) {
    yield put(cancelFriendFailure({ error: err }));
  }
}



/* function loadWaitingFriendsAPI(data) {
  return axios.get(`/user/loadWaitingFriends`);
}
 */
function* loadWaitingFriends() {
  try {
    //const result = yield call(loadWaitingFriendsAPI);
    //console.log(result.data);
    yield put(loadWaitingFriendsSuccess(dummyWaitingFriends));
  } catch (err) {
    yield put(loadWaitingFriendsFailure({ error: err }));
  }
}



/* function loadFriendsAPI(data) {
  return axios.get(`/user/loadFriends`);
} */



function* loadFriends() {
  try {
    //const result = yield call(loadFriendsAPI);
    //console.log(result.data);
    yield put(loadFriendsSuccess(dummyUsers));
  } catch (err) {
    yield put(loadFriendsFailure({ error: err }));
  }
}

function addFriendAPI(data) {
  return axios.post(`/user/addFriend`, data);
}

function* addFriend(action) {
  try {
    const result = yield call(addFriendAPI, action.payload);
    yield put(addFriendSuccess({ result }));
  } catch (err) {
    yield put(addFriendFailure({ error: err }));
  }
}

function signUpAPI(data) {
  return axios.post('/user/signUp', data);
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.payload);
    yield put(signUpSuccess(result));
  } catch (err) {
    yield put(signUpFailure({ error: err }));
  }
}

function logInAPI(data) {
  return axios.post('/user/login', data);
}

function* logIn(action) {
  try {
    /* const result = yield call(logInAPI, action.payload); */
    const result = {
      data: {
        id: 1,
        email: "ssh9234@gmail.com",
        nickname: "Suno",
        tag: 6600,
        state: "online",
      }
    }
    console.log(result);
    yield put(logInSuccess(result));
  } catch (err) {
    yield put(logInFailure({ error: err }));
  }
}

function* watchAcceptFriend() {
  yield takeLatest(acceptFriendRequest, acceptFriend);
}
function* watchCancelFriend() {
  yield takeLatest(cancelFriendRequest, cancelFriend);
}
function* watchRefuseFriend() {
  yield takeLatest(refuseFriendRequest, refuseFriend);
}
function* watchLoadWaitingFriends() {
  yield takeLatest(loadWaitingFriendsRequest, loadWaitingFriends);
}
function* watchLoadFriends() {
  yield takeLatest(loadFriendsRequest, loadFriends);
}
function* watchAddFriend() {
  yield takeLatest(addFriendRequest, addFriend);
}

function* watchSignUp() {
  yield takeLatest(signUpRequest, signUp);
}

function* watchLogIn() {
  yield takeLatest(logInRequest, logIn);
}

export default function* userSaga() {
  yield all([
    fork(watchAcceptFriend),
    fork(watchCancelFriend),
    fork(watchRefuseFriend),
    fork(watchLoadWaitingFriends),
    fork(watchLoadFriends),
    fork(watchAddFriend),
    fork(watchSignUp),
    fork(watchLogIn),
  ])
}