import { createAsyncThunk } from '@reduxjs/toolkit';
import { notifications } from '@mantine/notifications';
import api from '../../utils/api';
import { setAuthUser, unsetAuthUser } from '../authentication/slice';

const asyncRegisterUser = createAsyncThunk(
  'registerUser',
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.register(data);
      notifications.show({
        title: 'Registration Success',
        description: 'You have successfully registered',
        type: 'success',
        color: 'green',
      });
      return response; // Assuming response contains useful data on success
    } catch (error) {
      if (error.errors && Array.isArray(error.errors)) {
        // Display a notification for each error message
        error.errors.forEach((err) => {
          notifications.show({
            title: err.msg,
            description: err.msg,
            type: 'error',
            color: 'red',
          });
        });
      } else {
        // Fallback for unexpected errors
        notifications.show({
          title: 'Registration Failed',
          description: 'An unexpected error occurred during registration.',
          type: 'error',
          color: 'red',
        });
      }
      return rejectWithValue(error);
    }
  },
);

const asyncUpdateProfile = createAsyncThunk(
  'asyncUpdateProfile',
  async (data, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      const response = await api.editProfileUser(data);
      notifications.show({
        title: response.msg,
        description: response.msg,
        type: response.status,
        color: 'green',
      });
      dispatch(setAuthUser(response.data));
      return { error: null };
    } catch (error) {
      thunkAPI.rejectWithValue(error);
      notifications.show({
        title: error.message,
        description: error.message,
        type: error.status,
        color: 'red',
      });
      throw error;
    }
  },
);

const asyncChangePassword = createAsyncThunk(
  'asyncChangePassword',
  async (data, thunkAPI) => {
    try {
      const response = await api.changePassword(data);
      if (response.msg) {
        notifications.show({
          title: response.msg,
          description: response.msg,
          type: response.status,
          color: 'green',
        });
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error);
      notifications.show({
        title: error.message,
        description: error.message,
        type: error.status,
        color: 'red',
      });
      throw error;
    }
  },
);

const asyncDeleteUserByAuth = createAsyncThunk(
  'asyncDeleteUserByAuth',
  async (data, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      const response = await api.deleteUserByAuth();
      notifications.show({
        title: response.msg,
        description: response.msg,
        type: response.status,
        color: 'green',
      });
      dispatch(unsetAuthUser());
    } catch (error) {
      thunkAPI.rejectWithValue(error);
      notifications.show({
        title: error.message,
        description: error.message,
        type: error.status,
        color: 'red',
      });
      throw error;
    }
  },
);

export {
  asyncRegisterUser,
  asyncUpdateProfile,
  asyncChangePassword,
  asyncDeleteUserByAuth,
};
