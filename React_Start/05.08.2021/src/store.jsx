import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducerCheckState from './reducers/check';
import reducerSaveLog from './reducers/saveLogin';

const rootReducer = combineReducers({
  checkLogInState: reducerCheckState,
  savedLogin: reducerSaveLog
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;