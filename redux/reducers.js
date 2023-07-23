import {AUTH_USERNAME, AUTH_PASSWORD, LANGUAGE} from './action';

const initialState = {
  auth_username: null,
  auth_password: null,
  language: 'ไทย',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USERNAME:
      return {...state, auth_username: action.payload};
    case AUTH_PASSWORD:
      return {...state, auth_password: action.payload};
    case LANGUAGE:
      return {...state, language: action.payload};
    default:
      return state;
  }
};

export default userReducer;
