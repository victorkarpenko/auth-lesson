import axios from "axios";

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const options = {
    headers: {
        "Content-Type": "application/json",
    },
};

export const registerUser = (user) => async (dispatch) => {

};

export const loginUser = (user) => async (dispatch) => {
    
}

export const logoutUser = () => async (dispatch, getState) => {
   
}

export const currentUser = () => async (dispatch, getState) => {
    
}