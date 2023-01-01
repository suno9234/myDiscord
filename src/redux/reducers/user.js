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

  signUpDone: false,
  signUpLoading: false,
  signUpError: null,

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
  Array(20).fill().map((v, i) => ({
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

    loginRequest: (state, action) => {
      state.me = 'test';
    },

    signUpRequest: (state, action) => {
      state.signUpLoading = true;
      state.signUpDone = false;
    },

    signUpSuccess: (state, action) => {
      console.log("signupsuccess", action.payload);
      state.signUpLoading = false;
      state.signUpDone = true;
    },

  }
})

export const {
  enterServerRequest, enterHomeSuccess, enterServerSuccess,
  directmessageRequest,
  changeLoginPageState,
  loginRequest,
  signUpRequest, signUpSuccess,
} = userSlice.actions;
export default userSlice.reducer;