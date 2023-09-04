import { faker } from '@faker-js/faker';
import { all, fork, put, takeLatest } from 'redux-saga/effects';
import shortid from 'shortid';
import {
  loadChannelRequest, loadChannelSuccess, loadChannelFailure,
  loadChannelsRequest, loadChannelsSuccess, loadChannelsFailure
} from '../reducers/channel';
import { loadChannelMessageRequest } from '../reducers/directMessage';
import { enterServerSuccess, setLastClickedServerId } from '../reducers/user';


function* loadChannel(action) {
  const dummyChannel = {
    channelName: action.payload.channelName,
    channelId: action.payload.channelId,
    lastSelectedChattingChannelId: 0,
    isvisibleChattingChannels: true,
    isvisibleVoiceChannels: true,
    isvisibleMembers: true,
    chattingChannels: [
      {
        channelId: shortid.generate(),
        channelName: '일반',
      },
      {
        channelId: shortid.generate(),
        channelName: '두번째채팅방',
      }
    ],
    voiceChannels: [
      {
        channelId: shortid.generate(),
        channelName: '일반'
      }
    ],
    Users: [{
      id: 1,
      nickname: 'Suno',
      state: 'online',

    }].concat(Array(5).fill().map((v) => ({ id: shortid.generate(), nickname: faker.name.fullName(), state: ['online', 'offline', 'afk'][Math.floor(Math.random() * 3)], profileImage: faker.image.avatar(), })))
  }
  try {
    yield put(enterServerSuccess());
    yield put(loadChannelSuccess(dummyChannel));
    yield put(setLastClickedServerId({channelId : dummyChannel.channelId,}))
    yield put(loadChannelMessageRequest({ channel: dummyChannel.chattingChannels[0] }))


  } catch (err) {
    console.error(err);
    yield put(loadChannelFailure());

  }
}

function* loadChannels(action) {
  const dummyChannels = Array(5).fill().map((v) => ({
    channelName: faker.company.name(),
    channelId: shortid.generate(),
    profileImage: faker.image.business(60, 60, true),
  }))
  try {
    yield put(loadChannelsSuccess(dummyChannels));
    
  } catch (err) {
    console.error(err);
    yield put(loadChannelFailure());

  }
}

function* watchLoadChannel() {
  yield takeLatest(loadChannelRequest, loadChannel)

}
function* watchLoadChannels() {
  yield takeLatest(loadChannelsRequest, loadChannels)

}

export default function* channelSaga() {
  yield all([
    fork(watchLoadChannel),
    fork(watchLoadChannels),
  ])
}