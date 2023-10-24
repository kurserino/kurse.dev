import {
  configureStore,
  type Action,
  type ThunkAction,
} from '@reduxjs/toolkit';
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  type TypedUseSelectorHook,
} from 'react-redux';
import { middleware } from './middleware';
import { reducer } from './rootReducer';

export const reduxStore = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middleware);
  },
});

export const useDispatch = () => useReduxDispatch<ReduxDispatch>();

export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

export type ReduxStore = typeof reduxStore;

export type ReduxState = ReturnType<typeof reduxStore.getState>;

export type ReduxDispatch = typeof reduxStore.dispatch;

export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>;
