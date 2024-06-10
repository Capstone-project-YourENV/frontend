import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';
import { setAuthUser, unsetAuthUser } from './slice';
import fakeApi from '../../utils/fakeApi';

const asyncSetAuthUser = createAsyncThunk(
  'asyncSetAuthUser',
  async (data, thunkAPI) => {
    const { email, password } = data;
    const { dispatch } = thunkAPI;
    try {
      const token = await api.login({ email, password });
      api.putAcessToken(token);
      const authUser = await fakeApi.getAuthUser();
      dispatch(setAuthUser(authUser));
    } catch (error) {
      alert(error.message);
      throw error;
    }
  },
);

const asyncUnsetAuthUSer = createAsyncThunk(
  'asyncUnsetAuthUSer',
  async (data, { dispatch }) => {
    dispatch(unsetAuthUser());
    api.putAcessToken('');
  },
);

export { asyncSetAuthUser, asyncUnsetAuthUSer };
