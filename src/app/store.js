import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import counterReducer from '../features/counter/counterSlice';

const persistConfig = {
  key: 'root',
  storage: storage
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
  counter: counterReducer
}));

export default () => {
  let store = configureStore({
    reducer: persistedReducer,
  });
  let persistor = persistStore(store);

  return { store, persistor };
}
