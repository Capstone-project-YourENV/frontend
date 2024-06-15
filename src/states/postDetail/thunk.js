import { createAsyncThunk } from '@reduxjs/toolkit';
import fakeApi from '../../utils/fakeApi';
import {
  addBookmarkPostDetail,
  addCommentPostDetail,
  clearPostDetail,
  deleteCommentPostDetail,
  editCommentPostDetail,
  joinParticipantEvent,
  leaveParticipantEvent,
  receivePostDetail,
  removeBookmarkPostDetail,
  updatePostDetail,
} from './slice';
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
  const {
    title,
    description,
    category,
    image,
    startDate,
    endDate,
    maxParticipants,
  } = data;
  try {
    console.log(data);
    const post = await api.editPost({
      postId: getState().postDetail.id,
      title,
      category,
      description,
      image,
      startDate,
      endDate,
      maxParticipants,
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

const asyncAddComment = createAsyncThunk(
  'addComment',
  async (data, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    try {
      const comment = await api.addComment({
        postId: getState().postDetail.id,
        content: data,
      });
      dispatch(addCommentPostDetail(comment));
      return { error: null };
    } catch (error) {
      thunkAPI.rejectWithValue(error);
      alert(error.message);
      throw error;
    }
  },
);

const asyncEditComment = createAsyncThunk(
  'editComment',
  async (data, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    const { commentId, content } = data;
    try {
      const comment = await api.editComment({
        postId: getState().postDetail.id,
        commentId,
        content,
      });
      dispatch(editCommentPostDetail(comment));
      return { error: null };
    } catch (error) {
      thunkAPI.rejectWithValue(error);
      alert(error.message);
      throw error;
    }
  },
);

const asyncDeleteComment = createAsyncThunk(
  'deleteComment',
  async (commentId, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    try {
      await api.deleteComment({
        postId: getState().postDetail.id,
        commentId,
      });
      dispatch(deleteCommentPostDetail(commentId));
      return { error: null };
    } catch (error) {
      thunkAPI.rejectWithValue(error);
      alert(error.message);
      throw error;
    }
  },
);

const asyncJoinEvent = createAsyncThunk(
  'joinEvent',
  async (eventId, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      const response = await api.joinEvent({
        eventId,
      });
      dispatch(joinParticipantEvent(response));
      return { error: null };
    } catch (error) {
      thunkAPI.rejectWithValue(error);
      alert(error.message);
      throw error;
    }
  },
);

const asyncLeaveEvent = createAsyncThunk(
  'leaveEvent',
  async (eventId, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      const response = await api.leaveEvent({
        eventId,
      });
      dispatch(leaveParticipantEvent(response));
      return { error: null };
    } catch (error) {
      thunkAPI.rejectWithValue(error);
      alert(error.message);
      throw error;
    }
  },
);
const asyncAddBookmarkPostDetail = createAsyncThunk(
  'asyncAddBookmark',
  async (postId, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      const response = await api.addBookmark({ postId });
      dispatch(addBookmarkPostDetail(response));
      return { error: null };
    } catch (error) {
      thunkAPI.rejectWithValue(error);
      alert(error.message);
      throw error;
    }
  },
);

const asyncRemoveBookmarkPostDetail = createAsyncThunk(
  'asyncDeleteBookmark',
  async (postId, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      const response = await api.removeBookmark({ postId });
      dispatch(removeBookmarkPostDetail(response));
      return { error: null };
    } catch (error) {
      thunkAPI.rejectWithValue(error);
      alert(error.message);
      throw error;
    }
  },
);

export {
  asyncReceivePostDetail,
  asyncEditPost,
  asyncDeletePost,
  asyncAddComment,
  asyncEditComment,
  asyncDeleteComment,
  asyncJoinEvent,
  asyncLeaveEvent,
  asyncAddBookmarkPostDetail,
  asyncRemoveBookmarkPostDetail,
};
