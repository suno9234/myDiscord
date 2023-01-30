import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import { loadChannelRequest, loadChannelSuccess, loadChannelFailure } from '../reducers/channel';
import { enterServerSuccess } from '../reducers/user';


function* loadChannel(action) {
  try {
    yield put(loadChannelSuccess());
    yield put(enterServerSuccess());

  } catch (err) {
    console.error(err);
    yield put(loadChannelFailure());

  }
}

function* watchLoadChannel() {
  yield takeLatest(loadChannelRequest, loadChannel)

}

export default function* channelSaga() {
  yield all([
    fork(watchLoadChannel),
  ])
}