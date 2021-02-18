import { applyMiddleware, compose, createStore } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './user/reducer';
import articlesReducer from './articles/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(combineReducers({
  articles: articlesReducer,
  user: userReducer,
}), composeEnhancers(applyMiddleware(thunk)));
