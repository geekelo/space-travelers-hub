import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  status: 'idle',
  error: false,
};

export const fetchMissions = createAsyncThunk(
  'missions/fetchmissions',
  async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v3/missions');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
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
