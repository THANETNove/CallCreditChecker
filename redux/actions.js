export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_PASSWORD_USER = 'SET_PASSWORD_USER';

export const setName = name => dispatch => {
  dispatch({
    type: SET_USER_NAME,
    payload: name,
  });
};
export const setPasswordUser = passwordUser => dispatch => {
  dispatch({
    type: SET_PASSWORD_USER,
    payload: passwordUser,
  });
};
