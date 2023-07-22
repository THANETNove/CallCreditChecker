import {SET_USER_NAME, SET_PASSWORD_USER} from './actions';

const initialState = {
  name: '',
  passwordUser: '',
};

const initialState222 = {
  name: '5555',
  userPassword: '4444',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_NAME:
      return {...state, name: action.payload};
    case SET_PASSWORD_USER:
      return {...state, passwordUser: action.payload};
    default:
      return {...state};
  }
}

export default userReducer;
