import { createAsyncThunk } from '@reduxjs/toolkit';
import { addPost, deletePost, updatePost } from './slice';
import fakeApi from '../../utils/fakeApi';
import api from '../../utils/api';

const asyncAddPost = createAsyncThunk('addPost', async (data, thunkAPI) => {
  const {
    title,
    description,
    image,
    startDate,
    endDate,
    maxParticipant,
    category,
  } = data;
  const { getState, dispatch } = thunkAPI;
  try {
    const post = await api.createPost({
      ownerId: getState().authUser.id,
      title,
      description,
      image,
      startDate,
      endDate,
      maxParticipant,
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
    dispatch(updatePost(post));
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

export { asyncAddPost, asyncEditPost, asyncDeletePost };
