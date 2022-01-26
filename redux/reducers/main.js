import * as t from "../types";

const main = (state = {
  name: "son",
  email: "son.hua7399@gmail.com",
  loading: false,
  error: null,
  todos: []
}, action) => {
switch(action.type){
  case t.SET_NAME:
    return { 
      ...state,
      name: action.payload,
      email:action.payload
    };
  case t.REGISTER:
    return { 
      ...state,
      name: action.payload.name,
      email: action.payload.email,
      token: action.payload.token,
      loading: false,
      error: null
    };
  case t.LOADING:
    return { 
      ...state,
      loading: action.payload
    };
  case t.SIGN_OUT:
    return {
      name: "son",
      loading: false
    }
  case t.ERROR:
    return {
      ...state,
      error: action.payload
    }
  default:
    return {...state};
}
};

export default main;