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

  lastClickedServer: 'home',
  lastClickedMiddleMenu: -1,
  lastClickedMenu: null,

  me: null,

  loginPageState: 'selectId',
  rightMenuState: 'online',

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

    enterServerRequest: (state, action) => {
      state.lastClickedServer = action.payload.name;
    },
    enterServerSuccess: (state, action) => {
      state.isServer = true;
    },
    enterHomeSuccess: (state, action) => {
      state.isServer = false;
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
      const senderId = action.payload.sender;
      state.FriendRequests.received = state.FriendRequests.received.filter((v) => v.id !== parseInt(senderId))
      console.log('refuseFriendSuccess');
    },
    acceptFriendFailure: (state, action) => {
      console.log('refuseFriendFailure');
    },

    refuseFriendRequest: (state, action) => {
      console.log('refuseFriendRequest');
    },
    refuseFriendSuccess: (state, action) => {
      const senderId = action.payload.senderId;
      state.FriendRequests.received = state.FriendRequests.received.filter((v) => v.id !== parseInt(senderId))
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
      state.FriendRequests.sended = state.FriendRequests.sended.filter((v) => v.id !== parseInt(receiverId))
      console.log('cancelFriendSuccess');
    },
    cancelFriendFailure: (state, action) => {
      console.log('refuseFriendFailure');
    },





  }
})

export const {
  enterServerRequest, enterHomeSuccess, enterServerSuccess,
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