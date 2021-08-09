import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducerGetValue from './reducers/slider';
import reducerGetBtnState from './reducers/btnState';

const rootReducer = combineReducers({
  slider: reducerGetValue,
  btnState: reducerGetBtnState
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;