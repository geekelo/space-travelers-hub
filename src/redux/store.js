import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocket/rocketsSlice';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
  },
});

export default store;
