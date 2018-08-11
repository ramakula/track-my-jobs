import storage from 'redux-persist/lib/storage';

const KEY = 'com.herokuapp.track-my-jobs';

export const persistConfig = {
  key: KEY,
  storage,
  // whitelist: ['user'],
  // stateReconciler: hardSet,
};
