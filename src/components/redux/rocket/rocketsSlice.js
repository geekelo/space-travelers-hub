import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  status: 'idle',
  error: false,
};

export const fetchRockets = createAsyncThunk(
  'rockets/fetchrockets',
  async () => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v4/rockets');
      return response.data;
    } catch (error) {
      throw new Error('Something went wrong with fetching data');
    }
  },
);

const rocketReducer = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRockets: (state, { payload }) => ({
      ...state,
      rockets: state.rockets.map((each) => {
        if (each.id === payload) {
          return {
            ...each,
            active: true,
          };
        }
        return { ...each };
      }),
    }),
    cancelResevations: (state, { payload }) => ({
      ...state,
      rockets: state.rockets.map((each) => {
        if (each.id === payload) {
          return {
            ...each,
            active: false,
          };
        }
        return { ...each };
      }),
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchRockets.fulfilled, (state, action) => ({
        ...state,
        status: 'done',
        rockets: action.payload,
      }))
      .addCase(fetchRockets.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const { reserveRockets, cancelResevations } = rocketReducer.actions;
export default rocketReducer.reducer;
