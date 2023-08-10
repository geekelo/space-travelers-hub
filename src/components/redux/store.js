import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocket/rocketsSlice';
import missionReducer from './mission/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
  },
});

export default store;
