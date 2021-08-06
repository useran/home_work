const GET_VALUE = 'GET_VALUE';

const getValue = value => (dispatch) => {
  dispatch({
    type: GET_VALUE,
    data: value
  }); 
}
export default getValue;