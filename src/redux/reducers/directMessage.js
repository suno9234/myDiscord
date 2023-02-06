import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  directMessages: [],
  currentChannel: {
    id: 1,
    channelName: null,
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

    loadDirectMessageListRequest: (state, action) => {
      console.log('LOAD_DIRECTMESSAGECARDS')
    },
    loadDirectMessageListSuccess: (state, action) => {
      console.log('LOAD_DIRECTMESSAGECARDS_SUCCESS', action.payload);
      state.directMessages = action.payload;
    },
    loadDirectMessageListFailure: (state, action) => {
      console.log('LOAD_DIRECTMESSAGECARDS_FAILURE')
    },

    loadDirectMessageRequest: (state, action) => {
      console.log('ldmr')
    },
    loadDirectMessageSuccess: (state, action) => {
      console.log('다이렉트 메세지 불러오기 성공')
      console.log(action.payload);
      if (state.currentChannel.currentReceiver.id !== action.payload.receiver.id) {
        state.currentChannel.currentMessages = [];
      }

      state.directMessages = state.directMessages.filter((v) => v.id !== action.payload.receiver.id)
      if (state.currentChannel.currentReceiver.id === action.payload.receiver.id) {
        state.directMessages = []
      }
      state.directMessages = [{
        id: action.payload.receiver.id,
        nickname: action.payload.receiver.nickname,
        tag: action.payload.receiver.tag,
        profileImage: action.payload.receiver.profileImage,
        state:action.payload.receiver.state,
      }].concat(state.directMessages)

      state.currentChannel.id = action.payload.channelId;
      state.currentChannel.currentMessages = state.currentChannel.currentMessages.concat(action.payload.messages);
      state.currentChannel.currentReceiver = action.payload.receiver;
    },
    loadDirectMessageFailure: (state, action) => {
      console.log('ldmf')
    },

    loadChannelMessageRequest: (state, action) => {
      console.log('lcmr')
    },
    loadChannelMessageSuccess: (state, action) => {
      console.log("LOAD_CHANNEL_MESSAGE_SUCCESS")
      console.log(action.payload);
      state.currentChannel.channelId = action.payload.channelId;
      state.currentChannel.currentMessages = state.currentChannel.currentMessages.concat(action.payload.messages);
      state.currentChannel.channelName = action.payload.channelName;
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
      state.currentChannel.currentMessages = [{ id: state.currentChannel.currentMessages.length, ...action.payload }].concat(state.currentChannel.currentMessages)
      state.postMessageLoading = false;
      state.postMessageDone = true;
    },
    postMessageFailure: (state, action) => {
      console.log('실패');
    },

    removeDirectMessageCardRequest: (state, action) => {
      console.log('RDMR')
    },
    removeDirectMessageCardSuccess: (state, action) => {
      state.directMessages = state.directMessages.filter((v) => v.id !== action.payload.userId);
      state.currentChannel.id = -1;
    },
    removeDirectMessageCardFailure: (state, action) => {
      console.log('RDMR')
    },

  }
})

export const {
  addDirectMessageTab,
  loadDirectMessageRequest, loadDirectMessageSuccess, loadDirectMessageFailure,
  loadDirectMessageListRequest, loadDirectMessageListSuccess, loadDirectMessageListFailure,
  loadChannelMessageRequest, loadChannelMessageSuccess, loadChannelMessageFailure,
  removeDirectMessageCardRequest, removeDirectMessageCardSuccess, removeDirectMessageCardFailure,
  postMessageRequest, postMessageSuccess, postMessageFailure,

} = dmSlice.actions;

export default dmSlice.reducer;