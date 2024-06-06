import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

const asyncRegisterUser = createAsyncThunk(
  'registerUser',
  async (data, thunkAPI) => {
    try {
      await api.register(data);
      return { error: null };
    } catch (error) {
      alert(error.message);
      throw error;
    }
  },
);

export { asyncRegisterUser };
