import { combineReducers } from "redux";
import UserReducer from "./userreducer";

export default combineReducers({
  user: UserReducer,
});
