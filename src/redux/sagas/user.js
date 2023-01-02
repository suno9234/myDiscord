import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import axios from 'axios';

import {
  enterServerRequest, enterHomeSuccess, enterServerSuccess,
  signUpRequest, signUpSuccess, signUpFailure,
  logInRequest, logInSuccess,logInFailure,
} from '../reducers/user';

function* enterServer(action) {
  if (action.payload.name === 'home') {
    yield put(enterHomeSuccess())
  } else {
    yield put(enterServerSuccess({ name: action.payload.name }));
  }
}

function signUpAPI(data) {
  return axios.post('/user', data);
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.payload);
    yield put(signUpSuccess(result));
  } catch (err) {
    yield put(signUpFailure({error:err}));
  }
}

function logInAPI(data) {
  return axios.post('/user/login', data);
}

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.payload);
    yield put(logInSuccess(result));
  } catch (err) {
    yield put(logInFailure({error:err}));
  }
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
    fork(watchEnterServer),
    fork(watchSignUp),
    fork(watchLogIn),
  ])
}