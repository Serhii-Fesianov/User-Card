import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://65b3c2d4770d43aba47a5f75.mockapi.io',
});

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const { data } = await axiosInstance.get('/users');
    return data;
  } catch (error) {}
});
