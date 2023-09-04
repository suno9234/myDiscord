import { combineReducers } from "redux";
import user from './user';
import directMessage from "./directMessage";
import channel from "./channel";



const rootReducer = combineReducers({
  user,
  directMessage,
  channel,
})

export default rootReducer;