import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';
import { setAuthUser } from '../authentication/slice';
import { setIsPreload } from './slice';
import fakeApi from '../../utils/fakeApi';

const asyncPreloadProcess = createAsyncThunk(
  'asyncPreloadProcess',
  async (data, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      const authUser = await fakeApi.getAuthUser();
      dispatch(setAuthUser(authUser));
    } catch (error) {
      dispatch(setAuthUser(null));
    } finally {
      dispatch(setIsPreload(false));
    }
  },
);

export { asyncPreloadProcess };
