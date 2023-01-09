import { createSlice } from '@reduxjs/toolkit';
import { faker } from '@faker-js/faker';
import shortId from 'shortid';

const initialState = {
  id: 1,
  nickName: 'Suno',
  userCode: '9498',
  profileImage: faker.image.avatar(),
  Servers: [],
  DirectMessages: [],
  Friends: [],
  isServer: false,

  lastClickedServer: 'home',
  lastClickedDM: 'friends',
  lastClickedMenu: null,

  me: null,

  loginPageState: 'selectId',
  rightMenuState : 'online',

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
    changeRightMenuState: (state, action)=>{
      state.rightMenuState = action.payload.state;
    },

    logInRequest: (state, action) => {
      console.log("loginRequest");
      state.logInDone = false;
      state.logInLoading = true;
    },
    logInSuccess: (state, action) => {
      console.log("loginSuccess");
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

  }
})

export const {
  enterServerRequest, enterHomeSuccess, enterServerSuccess,
  directmessageRequest,
  changeLoginPageState, changeRightMenuState,
  logInRequest, logInSuccess, logInFailure,
  signUpRequest, signUpSuccess, signUpFailure,
} = userSlice.actions;
export default userSlice.reducer;