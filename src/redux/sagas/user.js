import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import axios from 'axios';

import {
  enterServerRequest, enterHomeSuccess, enterServerSuccess,
  signUpRequest, signUpSuccess, signUpFailure,
  logInRequest, logInSuccess, logInFailure,
  addFriendRequest, addFriendSuccess, addFriendFailure,
  loadFriendsRequest, loadFriendsSuccess, loadFriendsFailure,
  loadWaitingFriendsRequest, loadWaitingFriendsSuccess, loadWaitingFriendsFailure,
  acceptFriendRequest, acceptFriendSuccess, acceptFriendFailure,
  cancelFriendRequest, cancelFriendSuccess, cancelFriendFailure,
  refuseFriendRequest, refuseFriendSuccess, refuseFriendFailure, changeMiddleMenuState,
} from '../reducers/user';
import { loadDirectMessageRequest } from "../reducers/directMessage";


function* enterServer(action) {
  if (action.payload.name === 'home') {
    yield put(enterHomeSuccess())
  } else {
    yield put(enterServerSuccess({ name: action.payload.name }));
  }
}




function acceptFriendAPI(data) {
  return axios.post(`/user/acceptFriend/${data.senderId}`);
}

function* acceptFriend(action) {
  try {
    const result = yield call(acceptFriendAPI, action.payload);
    yield put(acceptFriendSuccess(result.data));
  } catch (err) {
    yield put(acceptFriendFailure({ error: err }));
  }
}

function refuseFriendAPI(data) {
  return axios.delete(`/user/friendRequest/sender/${data.senderId}`);
}

function* refuseFriend(action) {
  try {
    const result = yield call(refuseFriendAPI, action.payload);
    yield put(refuseFriendSuccess(result.data));
  } catch (err) {
    yield put(refuseFriendFailure({ error: err }));
  }
}

function cancelFriendAPI(data) {
  return axios.delete(`/user/friendRequest/receiver/${data.receiverId}`);
}

function* cancelFriend(action) {
  try {
    const result = yield call(cancelFriendAPI, action.payload);
    yield put(cancelFriendSuccess(result.data));
  } catch (err) {
    yield put(cancelFriendFailure({ error: err }));
  }
}



function loadWaitingFriendsAPI(data) {
  return axios.get(`/user/loadWaitingFriends`);
}

function* loadWaitingFriends() {
  try {
    const result = yield call(loadWaitingFriendsAPI);
    yield put(loadWaitingFriendsSuccess(result.data));
  } catch (err) {
    yield put(loadWaitingFriendsFailure({ error: err }));
  }
}

function loadFriendsAPI(data) {
  return axios.get(`/user/loadFriends`);
}

function* loadFriends() {
  try {
    const result = yield call(loadFriendsAPI);
    console.log(result.data);
    yield put(loadFriendsSuccess(result.data));
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
    const result = yield call(logInAPI, action.payload);
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
function* watchEnterServer() {
  yield takeLatest(enterServerRequest, enterServer);
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
    fork(watchEnterServer),
    fork(watchSignUp),
    fork(watchLogIn),
  ])
}