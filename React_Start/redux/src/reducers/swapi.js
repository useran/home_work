const initionalState = '41.9BBY'

const reducer = (state = initionalState, action) => {
  
  switch (action.type) {
    case 'GET_SWAPI':
      return action.data
    default:
      return state;
  }
};

export default reducer;
