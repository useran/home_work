const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'GET_VALUE':
      return action.data;
    default:
      return state;
  }
};

export default reducer;
