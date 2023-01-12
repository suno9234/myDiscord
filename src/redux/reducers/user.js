import { createSlice } from '@reduxjs/toolkit';
import { faker } from '@faker-js/faker';
import shortId from 'shortid';

const initialState = {
  id: 1,
  profileImage: faker.image.avatar(),
  Servers: [],
  DirectMessages: [],
  Friends: [],
  FriendRequests: {
    sended: [],
    received: [],
  },
  isServer: false,

  lastClickedServer: 'home',
  lastClickedDM: 'friends',
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

initialState.DirectMessages = initialState.DirectMessages.concat(
  Array(20).fill().map((v, i) => ({
    name: shortId.generate(),
    profileImage: faker.image.avatar(),
  }))
);

initialState.Friends = initialState.Friends.concat(
  Array(10).fill().map((v, i) => ({
    name: shortId.generate(),
    profileImage: faker.image.avatar(),
    state: 'online',
  }))
)

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

    directmessageRequest: (state, action) => {
      state.lastClickedDM = action.payload.name;
    },

    changeLoginPageState: (state, action) => {
      state.loginPageState = action.payload.state;
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
      const receivers = action.payload.receivers;
      receivers.forEach((r) => {
        const result = state.FriendRequests.sended.some((s) => r.id === s.id)
        if (!result) {
          state.FriendRequests.sended.push(r)
        }
      })
      const senders = action.payload.senders;
      senders.forEach((s) => {
        const result = state.FriendRequests.received.some((r) => r.id === s.id)
        if (!result) {
          state.FriendRequests.received.push(s);
        }
      })

    },
    loadWaitingFriendsFailure: (state, action) => {
      console.log('loadwaitingFriendsFailure')
    },

    refuseFriendRequest: (state, action) => {
      console.log('refuseFriendRequest');
    },
    refuseFriendSuccess: (state, action) => {
      const senderId = action.payload.sender;
      state.FriendRequests.received = state.FriendRequests.received.filter((v) => v.id !== parseInt(senderId) )
      console.log('refuseFriendSuccess');
    },
    refuseFriendFailure: (state, action) => {
      console.log('refuseFriendFailure');
    },





  }
})

export const {
  enterServerRequest, enterHomeSuccess, enterServerSuccess,
  directmessageRequest,
  changeLoginPageState, changeRightMenuState,
  logInRequest, logInSuccess, logInFailure,
  signUpRequest, signUpSuccess, signUpFailure,
  addFriendRequest, addFriendSuccess, addFriendFailure,
  loadFriendsRequest, loadFriendsSuccess, loadFriendsFailure,
  loadWaitingFriendsRequest, loadWaitingFriendsSuccess, loadWaitingFriendsFailure,
  refuseFriendRequest, refuseFriendSuccess, refuseFriendFailure,
} = userSlice.actions;
export default userSlice.reducer;