import { createAsyncThunk } from '@reduxjs/toolkit';
import fakeApi from '../../utils/fakeApi';
import { receiveUsers } from '../users/slice';
import { receivePosts } from '../posts/slice';
import { receiveBookmark } from '../bookmark/slice';

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
      const users = await fakeApi.getUsers();
      dispatch(receiveUsers(users));
      return response;
    } catch (error) {
      alert(error.message);
      return thunkAPI.rejectWithValue(error.message);
      //   throw error;
    }
  },
);

const asyncForumPostAndUsersByTrends = createAsyncThunk(
  'asyncForumPostAndUsersByTrends',
  async (page, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      const response = await fakeApi.getPostsByTrends();
      console.log(response);
      const users = await fakeApi.getUsers();
      dispatch(receiveUsers(users));
      dispatch(receivePosts(response));
    } catch (error) {
      alert(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const asyncForumPostAndUsersByUpcoming = createAsyncThunk(
  'asyncForumPostAndUsersByUpcoming',
  async (page, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      const response = await fakeApi.getPostsByUpcoming();
      const users = await fakeApi.getUsers();
      dispatch(receiveUsers(users));
      dispatch(receivePosts(response));
    } catch (error) {
      alert(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const asyncForumPostAndUsersBookmark = createAsyncThunk(
  'asyncForumPostAndUsersBookmark',
  async (data, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    try {
      const { authUser } = getState();
      const response = await fakeApi.getPostsByBookmark(authUser.id);
      const users = await fakeApi.getUsers();
      dispatch(receiveUsers(users));
      dispatch(receiveBookmark(response));
    } catch (error) {
      alert(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export {
  asyncForumPostAndUsers,
  asyncForumPostAndUsersByTrends,
  asyncForumPostAndUsersByUpcoming,
  asyncForumPostAndUsersBookmark,
};
