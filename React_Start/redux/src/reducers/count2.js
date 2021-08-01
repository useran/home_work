const initionalState = 22;

const reducerCount = (state = initionalState, action) => {

  switch (action.type) {
  case 'COUNTER2_PLUS1':
      return state + 1;
  case 'COUNTER2_MINUS1':
      return state - 1;
  default:
    return state;
  }
};

export default reducerCount;
