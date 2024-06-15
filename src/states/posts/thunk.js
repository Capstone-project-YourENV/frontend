import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addBookmarkPost,
  addPost,
  removeBookmarkPost,
} from './slice';
import api from '../../utils/api';

const asyncAddPost = createAsyncThunk('addPost', async (data, thunkAPI) => {
  const {
    title,
    description,
    image,
    startDate,
    endDate,
    maxParticipants,
    category,
  } = data;
  const { dispatch } = thunkAPI;
  try {
    const post = await api.createPost({
      title,
      description,
      image,
      startDate,
      endDate,
      maxParticipants,
      category,
    });
    dispatch(addPost(post));
    return { error: null };
  } catch (error) {
    thunkAPI.rejectWithValue(error);
    alert(error.message);
    throw error;
  }
});

const asyncAddBookmarkPost = createAsyncThunk(
  'addBookmarkPost',
  async (postId, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    try {
      const response = await api.addBookmark({ postId });
      dispatch(addBookmarkPost(postId, response));
      return { error: null };
    } catch (error) {
      thunkAPI.rejectWithValue(error);
      alert(error.message);
      throw error;
    }
  },
);

const asyncRemoveBookmarkPost = createAsyncThunk(
  'removeBookmarkPost',
  async (payload, thunkAPI) => {
    const { postId, userId } = payload;
    const { dispatch, getState } = thunkAPI;
    try {
      await api.removeBookmark({ postId });
      dispatch(removeBookmarkPost(postId, userId));
      return { error: null };
    } catch (error) {
      thunkAPI.rejectWithValue(error);
      alert(error.message);
      throw error;
    }
  },
);

export { asyncAddPost, asyncAddBookmarkPost, asyncRemoveBookmarkPost };
