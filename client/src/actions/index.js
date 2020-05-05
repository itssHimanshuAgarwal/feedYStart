import axios from "axios";
import { FETCH_USER } from "./types";

//ACTION CREATORS
//refactoring to use redux thunk
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};
//it is very important to create route handlers
//here we make a POST request
