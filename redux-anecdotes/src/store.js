import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import anecdoteReducer from './reducers/anecdoteReducer';
import notificationReducer from './reducers/notificationReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import filterReducer from './reducers/filterReducer';

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
