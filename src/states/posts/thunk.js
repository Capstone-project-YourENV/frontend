import { createAsyncThunk } from '@reduxjs/toolkit';
import { addPost, deletePost } from './slice';
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



export { asyncAddPost };
