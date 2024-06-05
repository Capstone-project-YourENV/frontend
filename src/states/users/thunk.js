import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

const asyncRegisterUser = createAsyncThunk(
  'registerUser',
  async (data, thunkAPI) => {
    try {
      console.log(data);
      await api.register(data);
      return { error: null };
    } catch (error) {
      return { error: error.message };
    }
  },
);

export { asyncRegisterUser };
