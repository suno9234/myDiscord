import { createSlice } from '@reduxjs/toolkit';
import { faker } from '@faker-js/faker';
import shortId from 'shortid';

const initialState = {
  id: 1,
  nickName: 'Suno',
  userCode : '9498',
  profileImage : faker.image.avatar(),
  Servers: [],
  Friends: [],
  isServer: false,
}

initialState.Servers = initialState.Servers.concat(
  Array(20).fill().map((v, i) => ({
    name: shortId.generate(),
    profileImage: faker.image.avatar(),
  }))
);

initialState.Friends = initialState.Friends.concat(
  Array(20).fill().map((v, i) => ({
    name : shortId.generate(),
    profileImage : faker.image.avatar(),
  }))
)

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    enterServer: (state, action) => {
      console.log(state, action);
      state.isServer = true;
    },
    enterHome: (state, action) => {
      console.log(state, action);
      state.isServer = false;
    }
  }
})

export const { enterServer, enterHome } = userSlice.actions;
export default userSlice.reducer;