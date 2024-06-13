import { createAsyncThunk } from '@reduxjs/toolkit';
import fakeApi from '../../utils/fakeApi';
import { clearPostDetail, receivePostDetail, updatePostDetail } from './slice';
import api from '../../utils/api';
import { deletePost } from '../posts/slice';

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

const asyncEditPost = createAsyncThunk('editPost', async (data, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;
  const { title, description, image, startDate, endDate, maxParticipant } =
    data;
  try {
    console.log(data);
    const post = await api.editPost({
      id: getState().postDetail.id,
      title,
      description,
      image,
      startDate,
      endDate,
      maxParticipant,
    });
    dispatch(updatePostDetail(post));
    return { error: null };
  } catch (error) {
    thunkAPI.rejectWithValue(error);
    alert(error.message);
    throw error;
  }
});

const asyncDeletePost = createAsyncThunk(
  'deletePost',
  async (postId, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      await api.deletePost(postId);
      dispatch(deletePost(postId));
      return { error: null };
    } catch (error) {
      thunkAPI.rejectWithValue(error);
      alert(error.message);
      throw error;
    }
  },
);

export { asyncReceivePostDetail, asyncEditPost, asyncDeletePost };
