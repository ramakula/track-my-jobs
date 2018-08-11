import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import { persistConfig } from '../pkgs/reduxPersist';

import formReducer from './form';
import userReducer from './user';

const rootReducer = combineReducers({
  form: formReducer,
  user: persistReducer(persistConfig, userReducer),
});

export default rootReducer;
