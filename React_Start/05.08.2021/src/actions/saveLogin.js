const LOGIN = 'LOGIN';

const recordLogin = (login) => (dispatch) => {
  dispatch({
    type: LOGIN,
    data: login
  }); 
}
export default recordLogin;