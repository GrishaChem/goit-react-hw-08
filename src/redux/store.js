import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";
import { authSlice } from "./Auth/Slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root-auth',
  version: 1,
    storage,
  whitelist: ['token'],
}


export const store = configureStore({
    reducer: {
       contacts: contactsReducer,
        filter: filterReducer,
       auth:  persistReducer(persistConfig, authSlice),
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store)