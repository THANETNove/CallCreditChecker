export const AUTH_USERNAME = 'AUTH_USERNAME';
export const AUTH_PASSWORD = 'AUTH_PASSWORD';
export const setAuthUserName = auth_username => dispatch => {
  dispatch({
    type: AUTH_USERNAME,
    payload: auth_username,
  });
};
export const setAuthPassword = auth_password => dispatch => {
  dispatch({
    type: AUTH_PASSWORD,
    payload: auth_password,
  });
};
