import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from './reducers';

const devMiddleware = [];
const middleware = [];

if (process.env.NODE_ENV === 'development') {
  devMiddleware.push(logger);
  // add more dev middleware here
}

middleware.push(thunk);
// add more middleware here

const store = createStore(
  reducer,
  applyMiddleware(...middleware.concat(devMiddleware)),
);

export default store;
