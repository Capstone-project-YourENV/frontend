import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearUserDetail, receiveUserDetail } from './slice';
import fakeApi from '../../utils/fakeApi';

const asyncReceiveUserDetail = createAsyncThunk(
  'asyncReceiveUserDetail',
  async (userId, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(clearUserDetail());
    try {
      const userDetail = await fakeApi.getDetailUser(userId);
      dispatch(receiveUserDetail(userDetail));
    } catch (error) {
      alert(error.message);
      throw error;
    }
  },
);

export { asyncReceiveUserDetail };
