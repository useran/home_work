import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducerGetValue from './reducers/slider';

const rootReducer = combineReducers({
  slider: reducerGetValue
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;