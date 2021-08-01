import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducerCount1 from './reducers/count1';
import reducerCount2 from './reducers/count2';
import catState from './reducers/newCat';
import reducerSwapi from './reducers/swapi';

const rootReducer = combineReducers({
  count1: reducerCount1,
  count2: reducerCount2,
  urlCat: catState,
  dataSwapi: reducerSwapi,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;