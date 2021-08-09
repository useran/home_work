const reducer = (state = false, action) => {
  switch (action.type) {
    case 'GET_BTN_STATE':
      return state ? false : true;
    default:
      return state;
  }
};

export default reducer;
