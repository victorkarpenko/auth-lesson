import axios from "axios";
import { registrationRequest, requestSuccess, registrationError } from '../actions/register';
import { loginRequest, loginError } from '../actions/login';
import { tokenSet } from '../actions/token';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const options = {
    headers: {
        "Content-Type": "application/json",
    },
};

export const registerUser = (user) => async (dispatch) => {
    dispatch(registrationRequest());
    const response = await axios.post('/users/signup', user, options)

    if (response.error) {
        dispatch(registrationError(response.error))
        return;
    }

    dispatch(requestSuccess(response.data.user))
    dispatch(tokenSet(response.data.token.token))
};

export const loginUser = (user) => async (dispatch) => {
    dispatch(loginRequest());
    const response = await axios.post('/users/login', user, options)

    if (response.error) {
        dispatch(loginError(response.error))
        return;
    }

    dispatch(requestSuccess(response.data.user))
    dispatch(tokenSet(response.data.token))
}

export const logoutUser = () => async (dispatch, getState) => {
    const token = getState().token;

    const response = await axios.post('/users/logout', null, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
        }
    })

    if (response.error) {
        return;
    }

    dispatch(requestSuccess(response.data))
    dispatch(tokenSet(null))
}

export const getCurrentUser = () => async (dispatch, getState) => {
    const token = getState().token;

    const response = await axios.get('/users/current', {
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
        }
    })

    if(response.error) {
        return;
    }

    dispatch(requestSuccess(response.data))
}