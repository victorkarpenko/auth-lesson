import {
    LOGIN_ERROR,
    LOGIN_REQUEST,
  } from "../types";
  
  export const loginRequest = () => ({
    type: LOGIN_REQUEST,
  });
  
  export const loginError = (error) => ({
    type: LOGIN_ERROR,
    payload: error,
  });
  