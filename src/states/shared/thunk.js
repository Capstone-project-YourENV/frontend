import { createAsyncThunk } from '@reduxjs/toolkit';
import fakeApi from '../../utils/fakeApi';
import { receiveUsers } from '../users/slice';
import { receivePosts } from '../posts/slice';

const asyncForumPostAndUsers = createAsyncThunk(
  'asyncForumPostAndUsers',
  async (data, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      const users = await fakeApi.getUsers();
      const posts = await fakeApi.getPosts();
      dispatch(receiveUsers(users));
      dispatch(receivePosts(posts));
    } catch (error) {
      alert(error.message);
      throw error;
    }
  },
);

export { asyncForumPostAndUsers };