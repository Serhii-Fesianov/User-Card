import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './operation';

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  extraReducers: builder =>
    builder.addCase(fetchUsers.fulfilled, (_, action) => {
      return action.payload;
    }),
});

export const usersSliceReducer = usersSlice.reducer;
