import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: [],
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
    reserveRockets: (state, action) => {
      const newValue1 = state.value.map((each) => {
        if (each.id === action.payload) {
          return {
            ...each,
            active: true,
          };
        }
        return each;
      });
      return {
        ...state,
        value: newValue1,
      };
    },
    cancelResevations: (state, action) => {
      const newValue2 = state.value.map((each) => {
        if (each.id === action.payload) {
          return {
            ...each,
            active: false,
          };
        }
        return each;
      });
      return {
        ...state,
        value: newValue2,
      };
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

export const { reserveRockets, cancelResevations } = rocketReducer.actions;
export default rocketReducer.reducer;
