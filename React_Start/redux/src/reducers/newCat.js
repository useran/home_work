const initionalState = 'https://images.dog.ceo/breeds/terrier-norwich/n02094258_778.jpg';

let stateArr = [];

const reducer = (state = initionalState, action) => {
  if (!stateArr.includes(state)){
    stateArr.push(state)
  }
  switch (action.type) {
    case 'CAT_REFRESH':
      return action.newUrl;
    case 'DOG_PREV':
      let count = action.count;
      return stateArr.length-count >= 0 ? stateArr[stateArr.length-count] : state;
    default:
      return state;
  }
};

export default reducer;
