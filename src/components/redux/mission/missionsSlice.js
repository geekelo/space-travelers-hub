import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  status: 'idle',
  error: false,
};

export const fetchMissions = createAsyncThunk(
  'missions/fetchmissions',
  async () => {
    try {
      const response = await axios.get(
        'https://api.spacexdata.com/v3/missions',
      );
      return response.data;
    } catch (error) {
      throw new Error('Something went wrong with fetching data');
    }
  },
);

const missionReducer = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    ReserveMissions: (state, { payload }) => ({
      ...state,
      missions: state.missions.map((mission) => {
        if (mission.mission_id === payload) {
          return {
            ...mission,
            reserved: true,
          };
        }
        return { ...mission };
      }),
    }),
    RemoveReserveMissions: (state, { payload }) => ({
      ...state,
      missions: state.missions.map((mission) => {
        if (mission.mission_id === payload) {
          return {
            ...mission,
            reserved: false,
          };
        }
        return { ...mission };
      }),
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchMissions.fulfilled, (state, action) => ({
        ...state,
        status: 'done',
        missions: action.payload,
        reserved: false,
      }))
      .addCase(fetchMissions.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const { ReserveMissions, RemoveReserveMissions } = missionReducer.actions;
export default missionReducer.reducer;
