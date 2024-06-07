import { createAsyncThunk } from '@reduxjs/toolkit';
import fakeApi from '../../utils/fakeApi';
import { receiveUsers } from '../users/slice';
import { receivePosts } from '../posts/slice';

const asyncForumPostAndUsers = createAsyncThunk(
  'asyncForumPostAndUsers',
  async (page, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      //   const users = await fakeApi.getUsers();
      //   const posts = await fakeApi.getPosts();
      //   dispatch(receiveUsers(users));
      //   dispatch(receivePosts(posts));
      //   return { users, posts, hasMore: posts.length > 0 };
      const response = await fakeApi.getPosts(page);
      return response;
    } catch (error) {
      alert(error.message);
      return thunkAPI.rejectWithValue(error.message);
      //   throw error;
    }
  },
);

export { asyncForumPostAndUsers };
