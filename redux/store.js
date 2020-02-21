// import { createStore } from "redux";
import { createStore } from "redux-dynamic-modules";
import reducers from './reducers';
import { combineReducers } from 'redux';

const staticReducers = combineReducers({
  ...reducers
});

const store = createStore({});

export default store;