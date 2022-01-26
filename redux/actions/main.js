import * as t from "../types";
import axios from "axios";
import { request } from "../../util/request";

export const setInfo = (name) => dispatch => {
  dispatch({
    type: t.SET_NAME,
    payload: name
  });
}
export const signOut = () => dispatch => {
  localStorage.removeItem("user_info")
  dispatch({
    type: t.SIGN_OUT
  });
}

export const restore = (data) => dispatch => dispatch({
  type: t.REGISTER,
  payload: data
});

export const userSignUp = ({ name, email, password }) => async dispatch => {
  try {
    dispatch({
      type: t.LOADING,
      payload: true
    })
    const apiResponse = await axios.post(process.env.API_ADDRESS+`/api/auth/register`, {name, email, password});

    if(apiResponse.data.success){
      localStorage.setItem("user_info", JSON.stringify(apiResponse.data.user))
      dispatch({
        type: t.REGISTER,
        payload: apiResponse.data.user
      })
    }

  }catch(error){
    dispatch({
      type: t.LOADING,
      payload: false
    })
    dispatch({
      type: t.ERROR,
      payload: error.response.data.error
    })
  }
}

export const userSignIn = ({ email, password }) => async dispatch => {
  try {
    dispatch({
      type: t.LOADING,
      payload: true
    })
    const apiResponse = await axios.post(process.env.API_ADDRESS+`/api/auth/login`, {email, password});

    if(apiResponse.data.success){
      localStorage.setItem("user_info", JSON.stringify(apiResponse.data.user))
      dispatch({
        type: t.REGISTER,
        payload: apiResponse.data.user
      })
    }

  }catch(error){
    console.log(error.response)
    dispatch({
      type: t.LOADING,
      payload: false
    })
    dispatch({
      type: t.ERROR,
      payload: error.response.data.error
    })
  }
}
