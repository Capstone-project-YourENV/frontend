import { createAsyncThunk } from '@reduxjs/toolkit';
import { addPost } from './slice';
import fakeApi from '../../utils/fakeApi';

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
  const { dispatch } = thunkAPI;
  try {
    const post = await fakeApi.createPost({
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
