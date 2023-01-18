import { createSlice } from '@reduxjs/toolkit';
import directMessageSaga from '../sagas/directMessage';


const initialState = {
  directMessages: [],
  currentChannel: {
    currentReceiver: {
      profileImage: null,
      nickname: 'test',
      tag: '0000',
    },
    currentMessages: [],
    hasMoreMessages: false,
  }

}

export const dmSlice = createSlice({
  name: 'directMessage',
  initialState,
  reducers: {
    loadDirectMessageRequest: (state, action) => {
      console.log('ldmr')
    },
    loadDirectMessageSuccess: (state, action) => {
      console.log('loadDirectMessageSuccess')
      console.log(action.payload);
      if (state.directMessages.filter((v) => v.id === action.payload.receiver.id)) {
        state.directMessages = state.directMessages.concat({ id: action.payload.receiver.id, nickname: action.payload.receiver.nickname });
      }
    },
    loadDirectMessageFailure: (state, action) => {
      console.log('ldmf')
    },
  }
})

export const {
  addDirectMessageTab,
  loadDirectMessageRequest, loadDirectMessageSuccess, loadDirectMessageFailure

} = dmSlice.actions;

export default dmSlice.reducer;