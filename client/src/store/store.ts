import { configureStore } from '@reduxjs/toolkit';
import navSlice from './features/nav/nav-slice';

export const store = configureStore({
  reducer: {
    navSlice: navSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;