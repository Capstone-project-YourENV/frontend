import { createSlice } from '@reduxjs/toolkit';
import { asyncForumPostAndUsers } from '../shared/thunk';

const initialState = {
  data: [],
  status: 'idle',
  hasMore: true,
  page: 1,
  error: null,
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    incrementPage(state) {
      state.page += 1;
    },
    resetPosts(state) {
      state.items = [];
      state.page = 1;
      state.hasMore = true;
    },
    receivePosts(state, action) {
      return { ...state, data: action.payload };
    },
    addPost: {
      reducer(state, action) {
        return [action.payload.post, ...state.data];
      },
      prepare(post) {
        return { payload: { post } };
      },
    },
    updatePost: {
      reducer(state, action) {
        const updatedPosts = state.data.map((post) => {
          if (post.id === action.payload.post.id) {
            return action.payload.post;
          }
          return post;
        });
        return {
          ...state,
          data: updatedPosts,
        };
      },
      prepare(post) {
        return { payload: { post } };
      },
    },
    deletePost: {
      reducer(state, action) {
        const updatedPosts = state.data.filter(
          (post) => post.id !== action.payload.postId,
        );
        return {
          ...state,
          data: updatedPosts,
        };
      },
      prepare(postId) {
        return { payload: { postId } };
      },
    },
    bookmarkPost: {
      reducer(state, action) {
        const updatedPosts = state.data.map((post) => {
          if (post.id === action.payload.postId) {
            return {
              ...post,
              isBookmarked: !post.isBookmarked,
            };
          }
          return post;
        });
        return {
          ...state,
          data: updatedPosts,
        };
      },
      prepare(postId) {
        return { payload: { postId } };
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncForumPostAndUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(asyncForumPostAndUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = [...state.items, ...action.payload.posts];
        state.hasMore = action.payload.hasMore;
      })
      .addCase(asyncForumPostAndUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      });
  },
});

export const {
  incrementPage,
  resetPosts,
  receivePosts,
  forumPost,
  addPost,
  updatePost,
  deletePost,
  bookmarkPost,
} = postSlice.actions;

export default postSlice.reducer;
