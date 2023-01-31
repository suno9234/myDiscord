import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  channels: [
    {
      channelName: 'Channel01',
      channelId: 1,
      profileImage: null,
    }
  ],
  selectedChattingChannelId: 1,
  currentChannel: {
    channelName: 'Channel01',
    channelId: '1',
    lastSelectedChattingChannelId : null,
    isvisibleChattingChannels : true,
    isvisibleVoiceChannels : true,
    isvisibleMembers : false,
    chattingChannels: [
      {
        channelId: 'server_1_chat_1',
        channelName: '일반',
      },
      {
        channelId: 'server_1_chat_2',
        channelName: '두번째채팅방',
      }
    ],
    voiceChannels: [
      {
        channelId: 'server_1_voice_1',
        channelName: '일반'
      }
    ],
    Users : [
      {
        id : 1,
        nickname : 'Suno',
        state : 'online',
      }
    ]
  },
}

export const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {

    setLastSelectedChattingChannelId : (state,action)=>{
      state.currentChannel.lastSelectedChattingChannelId = action.payload.channelId;
    },

    hideChattingChannels : (state,action)=>{
      state.currentChannel.isvisibleChattingChannels = false;
    },
    showChattingChannels : (state,action)=>{
      state.currentChannel.isvisibleChattingChannels = true;
    },

    hideMembers : (state,action)=>{
      state.currentChannel.isvisibleMembers = false;
    },
    showMembers : (state,action)=>{
      state.currentChannel.isvisibleMembers = true;
    },

    loadChannelRequest: (state, action) => {
      console.log('loadChannelRequest');
    },
    loadChannelSuccess: (state, action) => {
      state.currentChannel.lastSelectedChattingChannelId = state.currentChannel.chattingChannels[0].channelId;
    },
    loadChannelFailure: (state, action) => {
      console.log('loadChannelFailure');
    },
  }
})
export const {
  loadChannelRequest, loadChannelSuccess, loadChannelFailure,
  setLastSelectedChattingChannelId, 
  hideChattingChannels , showChattingChannels,
  hideMembers,showMembers,

} = channelSlice.actions;
export default channelSlice.reducer;