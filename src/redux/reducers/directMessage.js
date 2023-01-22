import { createSlice } from '@reduxjs/toolkit';
import directMessageSaga from '../sagas/directMessage';

const dummyMessage = [
  { sender: 'Suno', day: '3', content: 'test10' },
  { sender: 'Suno', day: '3', content: 'test11' },
  { sender: 'Suno', day: '3', content: 'test12' },
  { sender: 'Suno', day: '3', content: 'test13' },
  { sender: 'Suno', day: '3', content: 'test14' },
  { sender: 'Suno', day: '3', content: 'test15' },
  { sender: 'Suno', day: '3', content: 'test16' },
  { sender: 'Suno', day: '3', content: 'test17' },
  { sender: 'Suno', day: '3', content: 'test18' },
  { sender: 'Juno', day: '3', content: 'test6' },
  { sender: 'Juno', day: '3', content: 'test5' },
  { sender: 'Suno', day: '3', content: 'test4' },
  { sender: 'Suno', day: '2', content: 'test3' },
  { sender: 'Suno', day: '1', content: 'test2' },
  { sender: 'Suno', day: '1', content: 'test1' },
  { sender: 'Suno', day: '1', content: 'test' },
]
const initialState = {
  directMessages: [],
  currentChannel: {
    id: 1,
    currentReceiver: {
      profileImage: null,
      nickname: 'test',
      tag: '0000',
    },
    currentMessages: dummyMessage,
    hasMoreMessages: false,
  },

  postMessageLoading: false,
  postMessageDone: false,
  postMessageError: false,

}

export const dmSlice = createSlice({
  name: 'directMessage',
  initialState,
  reducers: {
    loadDirectMessageRequest: (state, action) => {
      console.log('ldmr')
    },
    loadDirectMessageSuccess: (state, action) => {
      console.log('다이렉트 메세지 불러오기 성공')
      console.log(action.payload);
      if (state.directMessages.every((v) => v.id !== action.payload.receiver.id)) {
        state.directMessages = state.directMessages.concat({ id: action.payload.receiver.id, nickname: action.payload.receiver.nickname });
      }
    },
    loadDirectMessageFailure: (state, action) => {
      console.log('ldmf')
    },

    postMessageRequest: (state, action) => {
      console.log('serverId : ', action.payload.serverId);
      console.log('postMessage : ', action.payload.content);
      state.postMessageLoading = true;
      state.postMessageDone = false;
    },
    postMessageSuccess: (state, action) => {
      console.log('성공', action.payload);
      state.currentChannel.currentMessages = [{ sender: 1, day: 'now', content: action.payload.data }].concat(state.currentChannel.currentMessages)
      state.postMessageLoading = false;
      state.postMessageDone = true;
    },
    postMessageFailure: (state, action) => {
      console.log('실패');
    },
  }
})

export const {
  addDirectMessageTab,
  loadDirectMessageRequest, loadDirectMessageSuccess, loadDirectMessageFailure,
  postMessageRequest, postMessageSuccess, postMessageFailure,

} = dmSlice.actions;

export default dmSlice.reducer;