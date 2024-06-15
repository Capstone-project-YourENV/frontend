import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';
import { setAuthUser, unsetAuthUser } from '../authentication/slice';

const asyncRegisterUser = createAsyncThunk(
  'registerUser',
  async (data, thunkAPI) => {
    try {
      console.table(data);
      await api.register(data);
      return { error: null };
    } catch (error) {
      alert(error.message);
      throw error;
    }
  },
);

const asyncUpdateProfile = createAsyncThunk(
  'asyncUpdateProfile',
  async (data, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      const response = await api.editProfileUser(data);
      console.log(response.data);
      dispatch(setAuthUser(response.data));
      return { error: null };
    } catch (error) {
      alert(error.message);
      throw error;
    }
  },
);

const asyncChangePassword = createAsyncThunk(
  'asyncChangePassword',
  async (data, thunkAPI) => {
    try {
      const { msg } = await api.changePassword(data);
      if (msg) {
        alert(msg);
      }
    } catch (error) {
      alert(error.message);
      throw error;
    }
  },
);

const asyncDeleteUserByAuth = createAsyncThunk(
  'asyncDeleteUserByAuth',
  async (data, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      await api.deleteUserByAuth();
      dispatch(unsetAuthUser());
    } catch (error) {
      alert(error.message);
      throw error;
    }
  },
);

export { asyncRegisterUser, asyncUpdateProfile, asyncChangePassword, asyncDeleteUserByAuth };
