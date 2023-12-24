import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer} from './contactsSlice';
import {filterReducer } from './filterSlice';
import {authReducer} from '../redux/auth/slice';
import { persistStore, persistReducer } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage' ;


const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

const authPersistedReducer = persistReducer(persistConfig, authReducer);

export const reducer = combineReducers({
  contacts: contactsReducer,
    filter: filterReducer,
    auth: authPersistedReducer,
})

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });


