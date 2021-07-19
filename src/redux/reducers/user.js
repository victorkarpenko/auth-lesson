import { LOGIN_SUCCESS, REGISTRATION_SUCCESS } from "../types";

const initialState = null;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS: 
      return payload;
    default:
      return state;
  }
};
