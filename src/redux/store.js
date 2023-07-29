import { configureStore } from '@reduxjs/toolkit';
import { contactListReducer } from './contactListReduser';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactListPersistConfig = {
  key: 'contactList',
  storage,
  whitelist:['contacts']
};
export const store = configureStore({
    reducer: {
        contactList: persistReducer(contactListPersistConfig, contactListReducer),
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });


export const persistor = persistStore(store);