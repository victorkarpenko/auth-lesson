import { REQUEST_SUCCESS } from "../types";

const initialState = null;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_SUCCESS: 
      return payload;
    default:
      return state;
  }
};
