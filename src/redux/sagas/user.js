import { all, fork, put, takeLatest } from "redux-saga/effects";
import { 
  enterServerRequest, enterHomeSuccess, enterServerSuccess,
  signUpRequest, signUpSuccess,
} from '../reducers/user';

function* enterServer(action) {
  if (action.payload.name === 'home') {
    yield put(enterHomeSuccess())
  } else {
    yield put(enterServerSuccess({ name: action.payload.name }));
  }
}

function signUpAPI(){
  return null;
}

function* signUp(action) {
  const result = signUpAPI(action.payload);
  yield put(signUpSuccess(result));
}

function* watchEnterServer() {
  yield takeLatest(enterServerRequest, enterServer);
}

function* watchSignUp() {
  yield takeLatest(signUpRequest, signUp);
}

export default function* userSaga() {
  yield all([
    fork(watchEnterServer),
    fork(watchSignUp),
  ])
}