const GET_BTN_STATE = 'GET_BTN_STATE';

const getValue = () => (dispatch) => {
  dispatch({
    type: GET_BTN_STATE
  }); 
}
export default getValue;