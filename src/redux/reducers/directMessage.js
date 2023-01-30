import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  directMessages: [],
  currentChannel: {
    id: 1,
    currentReceiver: {
      profileImage: null,
      nickname: 'test',
      tag: '0000',
    },
    currentMessages: [],
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
      console.log('서버 메세지 불러오기 성공')
      console.log(action.payload);
      if (state.directMessages.every((v) => v.id !== action.payload.receiver.id)) {
        state.directMessages = state.directMessages.concat({ id: action.payload.receiver.id, nickname: action.payload.receiver.nickname });
      }
      state.currentChannel.id = action.payload.channelId;
      state.currentChannel.currentMessages = state.currentChannel.currentMessages.concat(action.payload.messages);
    },
    loadDirectMessageFailure: (state, action) => {
      console.log('ldmf')
    },

    loadChannelMessageRequest: (state, action) => {
      console.log('lcmr')
    },
    loadChannelMessageSuccess: (state, action) => {
      console.log(action.payload);
      state.currentChannel.id = action.payload.channelId;
      state.currentChannel.currentMessages = state.currentChannel.currentMessages.concat(action.payload.messages);
    },
    loadChannelMessageFailure: (state, action) => {
      console.log('lcmf')
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
  loadChannelMessageRequest,loadChannelMessageSuccess,loadChannelMessageFailure,
  postMessageRequest, postMessageSuccess, postMessageFailure,

} = dmSlice.actions;

export default dmSlice.reducer;