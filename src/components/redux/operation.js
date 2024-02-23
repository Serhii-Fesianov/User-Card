import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://65b3c2d4770d43aba47a5f75.mockapi.io',
});

export const fetchUsers = createAsyncThunk('users/fetchUsers', async page => {
  const params = new URLSearchParams({
    page: 1,
    limit: 3,
  });
  try {
    let { data } = await axiosInstance.get(`/users/?${params}`);
    data.forEach(element => {
      const options = { maximumFractionDigits: 2 };
      element.tweets = Intl.NumberFormat('en-US', options).format(
        element.tweets
      );
    });

    return data;
  } catch (error) {}
});
