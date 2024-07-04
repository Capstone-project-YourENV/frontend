import { createAsyncThunk } from '@reduxjs/toolkit';
import { notifications } from '@mantine/notifications';
import api from '../../utils/api';
import { setAuthUser, unsetAuthUser } from './slice';

const asyncSetAuthUser = createAsyncThunk(
  'asyncSetAuthUser',
  async (data, thunkAPI) => {
    const { email, password } = data;
    const { dispatch, rejectWithValue } = thunkAPI;
    try {
      const response = await api.login({ email, password });
      api.putAcessToken(response.token);
      const authUser = await api.getOwnProfile();
      notifications.show({
        title: 'Login Success',
        description: 'You have successfully logged in',
        status: 'success',
        color: 'green',
      });
      return dispatch(setAuthUser(authUser));
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
          title: 'Login Failed',
          description: 'An unexpected error occurred during registration.',
          type: 'error',
          color: 'red',
        });
      }
      return rejectWithValue(error);
    }
  },
);

const asyncUnsetAuthUser = createAsyncThunk(
  'asyncUnsetAuthUSer',
  async (data, { dispatch }) => {
    dispatch(unsetAuthUser());
    notifications.show({
      title: 'Sign Out Success',
      description: 'You have sign out',
      status: 'success',
      color: 'green',
    });
    api.putAcessToken('');
  },
);

export { asyncSetAuthUser, asyncUnsetAuthUser };
