// import { createStore } from "redux";
import { createStore } from "redux-dynamic-modules";
import reducers from './reducers';
import { combineReducers } from 'redux';
import { getSagaExtension } from "redux-dynamic-modules-saga";

const staticReducers = combineReducers({
  ...reducers
});

const store = createStore({
  extensions: [getSagaExtension({})],
});

export default store;