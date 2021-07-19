import {
  REGISTRATION_ERROR,
  REGISTRATION_REQUEST,
  REQUEST_SUCCESS,
} from "../types";

export const registrationRequest = () => ({
  type: REGISTRATION_REQUEST,
});

export const requestSuccess = (user) => ({
  type: REQUEST_SUCCESS,
  payload: user,
});

export const registrationError = (error) => ({
  type: REGISTRATION_ERROR,
  payload: error,
});
