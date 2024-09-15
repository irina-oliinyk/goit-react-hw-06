import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from './filtersSlice';
import contactsSlice from './contactsSlice';
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

const persistedContactsReducer = persistReducer(
  {
    key: 'user-contacts',
    storage,
    whitelist: ['items'],
  },
  contactsSlice,
);

const persistedFilterReducer = persistReducer(
  {
    key: 'user-filter',
    storage,
    whitelist: ['name'],
  },
  filtersSlice,
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: persistedFilterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
