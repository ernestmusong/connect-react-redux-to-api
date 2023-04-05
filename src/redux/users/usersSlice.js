import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://randomuser.me/api/?results=5';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (name, thunkAPI) => {
    try {
      console.log(name);
      console.log(thunkAPI);
      console.log(thunkAPI.getState());
      const resp = await axios(url);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const initialState = {
  users: [],
  isLoading: true,
  error: ''
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
   
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.error = 'Something went wrong'
      });
  },
});

export default usersSlice.reducer;
