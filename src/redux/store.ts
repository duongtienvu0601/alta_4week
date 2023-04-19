// store.ts
import { configureStore } from '@reduxjs/toolkit';
import inputPassReducer from './inputPassSlice';

const store = configureStore({
  reducer: {
    inputPass: inputPassReducer,
  },
});

export default store;