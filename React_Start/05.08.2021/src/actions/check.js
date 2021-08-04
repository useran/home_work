import axios from 'axios';
const GET_CHECK = 'GET_CHECK';

const check = (login, password, savedLogin) => (dispatch) => {
  axios.get(`http://localhost:3434/password`)
    .then(r => {
      dispatch({
        type: GET_CHECK,
        data: { login, password, savedLogin, psw: r.data.psw }
      }); 
    });
}
export default check;