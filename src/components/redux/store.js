import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocket/rocketsSlice';
import missionReducer from './mission/missionsSlice';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    mission: missionReducer,
  },
});

export default store;
