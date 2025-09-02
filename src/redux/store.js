import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from "./userSlice.js"
import messageReducer from "./messageSlice.js"
import socketReducer from './socketSlice.js'
import storage from 'redux-persist/lib/storage';
import {
      persistReducer,
      persistStore,
      FLUSH,
      REHYDRATE,
      PAUSE,
      PERSIST,
      PURGE,
      REGISTER,
    } from 'redux-persist';


const persistConfig = {
  key: 'root', // The key for the storage in localStorage
  version: 1,
  storage, // The storage engine to use (e.g., localStorage, sessionStorage)
  whitelist: ['user', 'message'], // Optional: only persist specific parts of the state
  // blacklist: ['ui'], // Optional: don't persist specific parts of the state
};


const rootReducer = combineReducers({
  user: userReducer,
  message: messageReducer,
  socket: socketReducer
  // Add other slices here
});

 const persistedReducer = persistReducer(persistConfig, rootReducer);

const store =  configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
    });
    

export const persistor = persistStore(store);

export default store