import {
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
  } from "../types";
  
  export const loginRequest = () => ({
    type: LOGIN_REQUEST,
  });
  
  export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
  });
  
  export const loginError = (error) => ({
    type: LOGIN_ERROR,
    payload: error,
  });
  