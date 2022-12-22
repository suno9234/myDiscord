import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isRoom: false,
  roomCode: null,
}
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    enterRoom: (state, action) => {
      console.log(state,action);
      state = action.payload
    },
  }
})

export const { enterRoom } = userSlice.actions;
export default userSlice.reducer;