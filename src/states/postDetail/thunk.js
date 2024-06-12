import { createAsyncThunk } from '@reduxjs/toolkit';
import fakeApi from '../../utils/fakeApi';
import { clearPostDetail, receivePostDetail } from './slice';
import api from '../../utils/api';

const asyncReceivePostDetail = createAsyncThunk(
  'asyncReceivePostDetail',
  async (postId, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(clearPostDetail());
    try {
      const postDetail = await api.getDetailPost(postId);
      dispatch(receivePostDetail(postDetail));
    } catch (error) {
      alert(error.message);
      throw error;
    }
  },
);

export { asyncReceivePostDetail };
