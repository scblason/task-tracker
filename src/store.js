import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from "redux";

import {tasksReducer} from 'containers/TaskTracker/reducers';

const rootReducer = combineReducers({
  taskTracker: tasksReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
