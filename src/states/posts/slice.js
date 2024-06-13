import { createSlice } from '@reduxjs/toolkit';
import { asyncForumPostsAndUsers } from '../shared/thunk';

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
    incrementPage: (state) => {
      state.page += 1;
    },
    resetPosts: (state) => {
      state.data = [];
      state.page = 1;
      state.hasMore = true;
    },
    receivePosts: (state, action) => {
      state.data = [...state.data, ...action.payload];
    },
    addPost: (state, action) => {
      state.data.unshift(action.payload);
    },
    deletePost: (state, action) => {
      const updatedPosts = state.data.filter(
        (post) => post.id !== action.payload.id,
      );
      state.data = updatedPosts;
    },
    bookmarkPost: {
      reducer(state, action) {
        const updatedPosts = state.data.map((post) => {
          if (post.id === action.payload.postId) {
            return {
              ...post,
              boorkmarks: action.payload.user,
            };
          }
          return post;
        });
        state.data = updatedPosts;
      },
      prepare(postId, user) {
        return { payload: { postId, user } };
      },
    },

    unbookmarkPost: {
      reducer(state, action) {
        const updatedPosts = state.data.map((post) => {
          if (post.id === action.payload.postId) {
            return {
              ...post,
              boorkmarks: post.boorkmarks.shift(action.payload.user),
            };
          }
          return post;
        });
        state.data = updatedPosts;
      },
      prepare(postId, user) {
        return { payload: { postId, user } };
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncForumPostsAndUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(asyncForumPostsAndUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.data;
        state.hasMore = action.payload.hasMore;
        state.page = action.payload.page + 1;
      })
      .addCase(asyncForumPostsAndUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {
  incrementPage,
  resetPosts,
  receivePosts,
  addPost,
  deletePost,
  bookmarkPost,
  unbookmarkPost,
} = postSlice.actions;

export default postSlice.reducer;
