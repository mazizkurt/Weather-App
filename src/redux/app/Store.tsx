// import createSagaMiddleware from 'redux-saga'
import {reduxBatch} from '@manaflair/redux-batch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {combineReducers} from 'redux';
import {persistStore} from 'redux-persist';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import introSlice from 'src/redux/slices/introSlice';
import citySlice from '../slices/citySlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  intro: introSlice,
  city: citySlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [reduxBatch],
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

/**
 * @see https://github.com/rt2zz/redux-persist#persiststorestore-config-callback
 * @see https://github.com/rt2zz/redux-persist#persistor-object
 */
export const persistor = persistStore(store);
export const useAppDispatch: () => AppDispatch = useDispatch
// sagaMiddleware.run(rootSaga)

export default store;
