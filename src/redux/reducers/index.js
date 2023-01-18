import { combineReducers } from "redux";
import user from './user';
import directMessage from "./directMessage";



const rootReducer = combineReducers({
  user,
  directMessage,
})

export default rootReducer;