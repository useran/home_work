const reducer = (state = false, action) => {
  switch (action.type) {
    case 'GET_CHECK':
      return action.data.login === action.data.savedLogin && 
      action.data.password === action.data.psw ? true : false;
    default:
      return state;
  }
};

export default reducer;
