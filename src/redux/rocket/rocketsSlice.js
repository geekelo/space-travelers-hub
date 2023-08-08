import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: [],
  status: 'idle',
};

export const fetchRockets = createAsyncThunk('rockets/fetchrockets', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v4/rockets');
    return response.data;
  } catch (error) {
    throw new Error('Something went wrong with fetching data');
  }
});

const rocketReducer = createSlice({
  name: 'rocketpage',
  initialState,
  reducers: {
    getRockets: () => {

    },
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
        value: action.payload,
      }))
      .addCase(fetchRockets.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const { getRockets } = rocketReducer.actions;
export default rocketReducer.reducer;
