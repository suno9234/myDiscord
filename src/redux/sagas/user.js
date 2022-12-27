import { all, fork, put, takeLatest } from "redux-saga/effects";
import { enterServerRequest, enterHomeSuccess, enterServerSuccess } from '../reducers/user';

function* enterServer(action) {
  if (action.payload.name === 'home') {
    yield put(enterHomeSuccess())
  } else {
    yield put(enterServerSuccess({ name: action.payload.name }));
  }
}

function* watchEnterServer() {
  yield takeLatest(enterServerRequest, enterServer);
}

export default function* userSaga() {
  yield all([
    fork(watchEnterServer),
  ])
}