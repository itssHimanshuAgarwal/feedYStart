import { combineReducers } from "redux";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
});
//setting up a route means to poir up the components and the address
