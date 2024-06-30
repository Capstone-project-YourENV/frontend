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
      const newState = { ...state };
      newState.page += 1;
      return newState;
    },
    resetPosts: (state) => {
      const newState = { ...state };
      newState.data = [];
      newState.page = 1;
      newState.hasMore = true;
      return newState;
    },
    receivePosts: (state, action) => {
      const newState = { ...state };
      newState.page = 1;
      newState.status = 'idle';
      newState.data = action.payload;
      return newState;
    },
    addPost: (state, action) => {
      const newState = { ...state };
      newState.data.unshift(action.payload);
      return newState;
    },
    deletePost: (state, action) => {
      const newState = { ...state };
      newState.data = state.data.filter(
        (post) => post.id !== action.payload,
      );
      return newState;
    },
    addBookmarkPost: {
      reducer(state, action) {
        const newState = { ...state };
        newState.data = state.data.map((post) => {
          if (post.id === action.payload.postId) {
            return {
              ...post,
              bookmarks: [action.payload.user.data, ...post.bookmarks],
            };
          }
          return post;
        });
        return newState;
      },
      prepare(postId, user) {
        return { payload: { postId, user } };
      },
    },

    removeBookmarkPost: {
      reducer(state, action) {
        const newState = { ...state };
        newState.data = state.data.map((post) => {
          if (post.id === action.payload.postId) {
            return {
              ...post,
              bookmarks: post.bookmarks.filter(
                (bookmark) => bookmark.userId !== action.payload.userId,
              ),
            };
          }
          return post;
        });
        return newState;
      },
      prepare(postId, userId) {
        return { payload: { postId, userId } };
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncForumPostsAndUsers.pending, (state) => {
        const newState = { ...state };
        newState.status = 'loading';
        return newState;
      })
      .addCase(asyncForumPostsAndUsers.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.status = 'succeeded';
        newState.data = [...state.data, ...action.payload.data];
        newState.hasMore = action.payload.hasMore;
        newState.page = action.payload.page + 1; // Increment page for next fetch
        return newState;
      })
      .addCase(asyncForumPostsAndUsers.rejected, (state, action) => {
        const newState = { ...state };
        newState.status = 'failed';
        newState.error = action.payload || action.error.message;
        return newState;
      });
  },
});

export const {
  incrementPage,
  resetPosts,
  receivePosts,
  addPost,
  deletePost,
  addBookmarkPost,
  removeBookmarkPost,
} = postSlice.actions;

export default postSlice.reducer;
