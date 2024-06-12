import { createAsyncThunk } from '@reduxjs/toolkit';
import fakeApi from '../../utils/fakeApi';
import { receiveUsers } from '../users/slice';
import { receivePosts } from '../posts/slice';
import api from '../../utils/api';

const asyncHomePostsAndUsers = createAsyncThunk(
  'asyncHomePostsAndUsers',
  async (data, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      const { posts, users } = await api.getPostsHome();
      dispatch(receivePosts(posts));
      dispatch(receiveUsers(users));
    } catch (error) {
      alert(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const asyncForumPostsAndUsers = createAsyncThunk(
  'asyncForumPostsAndUsers',
  async (page, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      console.log(page);
      const response = await api.getPostsForum(page);
      const users = await api.getAllUser();
      dispatch(receiveUsers(users));
      return {
        data: response.data,
        hasMore: response.data.length > 0, // Adjust this according to your API response
        page,
      };
    } catch (error) {
      alert(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const asyncForumPostsAndUsersByTrends = createAsyncThunk(
  'asyncForumPostsAndUsersByTrends',
  async (data, thunkAPI) => {
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

const asyncForumPostsAndUsersByUpcoming = createAsyncThunk(
  'asyncForumPostsAndUsersByUpcoming',
  async (data, thunkAPI) => {
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

const asyncForumPostsAndUsersBookmark = createAsyncThunk(
  'asyncForumPostsAndUsersBookmark',
  async (userId, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      const response = await api.getPostsBookmarks(userId);
      const users = await api.getAllUser();
      dispatch(receiveUsers(users));
      dispatch(receivePosts(response));
    } catch (error) {
      alert(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const asyncForumMyPosts = createAsyncThunk(
  'asyncForumMyPosts',
  async (userId, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      const response = await api.getMyPosts(userId);
      const users = await fakeApi.getUsers();
      dispatch(receiveUsers(users));
      dispatch(receivePosts(response));
    } catch (error) {
      alert(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export {
  asyncHomePostsAndUsers,
  asyncForumPostsAndUsers,
  asyncForumPostsAndUsersByTrends,
  asyncForumPostsAndUsersByUpcoming,
  asyncForumPostsAndUsersBookmark,
  asyncForumMyPosts,
};
