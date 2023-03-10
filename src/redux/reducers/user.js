import { createSlice } from '@reduxjs/toolkit';
import { faker } from '@faker-js/faker';
import shortId from 'shortid';

const initialState = {
  Servers: [],
  Friends: [],
  FriendRequests: {
    sended: [],
    received: [],
  },

  isServer: false,
  isMicOff: false,
  isHeadsetOff: false,

  lastClickedServerId: -1,
  lastClickedMiddleMenu: -1,
  lastClickedMenu: null,

  me: null,

  loginPageState: 'selectId',
  rightMenuState: '온라인',

  signUpDone: false,
  signUpLoading: false,
  signUpError: null,

  logInDone: false,
  logInLoading: false,
  logInError: null,

}

initialState.Servers = initialState.Servers.concat(
  Array(20).fill().map((v, i) => ({
    name: shortId.generate(),
    profileImage: faker.image.avatar(),
  }))
);


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

    enterServerSuccess: (state, action) => {
      state.isServer = true;
    },
    enterHomeSuccess: (state, action) => {
      state.isServer = false;
    },
    setLastClickedServerId: (state, action) => {
      state.lastClickedServerId = action.payload.channelId
    },
    toggleMic: (state, action) => {
      if (state.isMicOff && state.isHeadsetOff) {
        state.isHeadsetOff = !state.isHeadsetOff
      }
      state.isMicOff = !state.isMicOff
    },
    toggleHeadset: (state, action) => {
      if (state.isMicOff === state.isHeadsetOff) {
        state.isMicOff = !state.isMicOff
      }
      state.isHeadsetOff = !state.isHeadsetOff

    },
    changeLoginPageState: (state, action) => {
      state.loginPageState = action.payload.state;
    },
    changeMiddleMenuState: (state, action) => {
      console.log('changeMiddleMenuState');
      console.log(action.payload.id);
      state.lastClickedMiddleMenu = action.payload.id;
    },
    changeRightMenuState: (state, action) => {
      state.rightMenuState = action.payload.state;
    },

    logInRequest: (state, action) => {
      console.log("loginRequest");
      state.logInDone = false;
      state.logInLoading = true;
    },
    logInSuccess: (state, action) => {
      console.log(action.payload);
      state.logInDone = true;
      state.logInLoading = false;
      state.me = action.payload.data;
    },
    logInFailure: (state, action) => {
      console.log("loginFailure");
      state.logInDone = false;
      state.logInLoading = false;
      state.logInError = true;
    },


    signUpRequest: (state, action) => {
      console.log("signUpRequest");
      state.signUpLoading = true;
      state.signUpDone = false;
    },
    signUpSuccess: (state, action) => {
      console.log("signupsuccess");
      state.signUpLoading = false;
      state.signUpDone = true;
    },
    signUpFailure: (state, action) => {
      console.log("signupFailed");
      state.signUpLoading = false;
      state.signUpError = action.payload.error;
    },

    addFriendRequest: (state, action) => {
      console.log('addFriendRequest');
    },
    addFriendSuccess: (state, action) => {
      console.log(action.payload);
      console.log('addFriendRequestSuccess');
    },
    addFriendFailure: (state, action) => {
      console.log('addFriendRequestFailure');
    },

    loadFriendsRequest: (state, action) => {
      console.log('loadFriendsRsequest');
    },
    loadFriendsSuccess: (state, action) => {
      console.log(action.payload);
      state.Friends = action.payload;
      console.log('loadFriendsRequestSuccess');
    },
    loadFriendsFailure: (state, action) => {
      console.log('loadFriendRequestFailure');
    },

    loadWaitingFriendsRequest: (state, action) => {
      console.log('loadwaitingFriendsRequest')
    },
    loadWaitingFriendsSuccess: (state, action) => {
      console.log('loadwaitingFriendsSuccess')
      console.log(action.payload);

      state.FriendRequests.sended = action.payload.receivers;
      state.FriendRequests.received = action.payload.senders;

    },
    loadWaitingFriendsFailure: (state, action) => {
      console.log('loadwaitingFriendsFailure')
    },

    acceptFriendRequest: (state, action) => {
      console.log('acceptFriendRequest');
    },
    acceptFriendSuccess: (state, action) => {
      const userInfo = action.payload;
      state.FriendRequests.received = state.FriendRequests.received.filter((v) => v.id !== userInfo.senderId)
      state.Friends = state.Friends.concat({ id: userInfo.senderId, nickname: userInfo.nickname, tag: userInfo.tag, state: ['online', 'offline'][Math.floor(Math.random() * 2)] })
      console.log('acceptFriendSuccess');
    },
    acceptFriendFailure: (state, action) => {
      console.log('acceptFriendFailure');
    },


    refuseFriendRequest: (state, action) => {
      console.log('refuseFriendRequest');
    },
    refuseFriendSuccess: (state, action) => {
      const senderId = action.payload.senderId;
      state.FriendRequests.received = state.FriendRequests.received.filter((v) => v.id !== senderId)
      console.log('refuseFriendSuccess');
    },
    refuseFriendFailure: (state, action) => {
      console.log('refuseFriendFailure');
    },


    cancelFriendRequest: (state, action) => {
      console.log('cancleFriendRequest');
    },
    cancelFriendSuccess: (state, action) => {
      const receiverId = action.payload.receiverId;
      state.FriendRequests.sended = state.FriendRequests.sended.filter((v) => v.id !== receiverId)
      console.log('cancelFriendSuccess');
    },
    cancelFriendFailure: (state, action) => {
      console.log('refuseFriendFailure');
    },





  }
})

export const {
  enterHomeSuccess, enterServerSuccess,
  toggleMic, toggleHeadset, setLastClickedServerId,
  changeLoginPageState, changeRightMenuState, changeMiddleMenuState,
  logInRequest, logInSuccess, logInFailure,
  signUpRequest, signUpSuccess, signUpFailure,
  addFriendRequest, addFriendSuccess, addFriendFailure,
  loadFriendsRequest, loadFriendsSuccess, loadFriendsFailure,
  loadWaitingFriendsRequest, loadWaitingFriendsSuccess, loadWaitingFriendsFailure,
  acceptFriendRequest, acceptFriendSuccess, acceptFriendFailure,
  refuseFriendRequest, refuseFriendSuccess, refuseFriendFailure,
  cancelFriendRequest, cancelFriendSuccess, cancelFriendFailure,
} = userSlice.actions;

export default userSlice.reducer;