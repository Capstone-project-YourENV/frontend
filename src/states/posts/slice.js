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
    incrementPage(state) {
      state.page += 1;
    },
    resetPosts(state) {
      state.data = [];
      state.page = 1;
      state.hasMore = true;
    },
    receivePosts(state, action) {
      return { ...state, data: action.payload };
    },
    addPost: {
      reducer(state, action) {
        return { ...state, data: [action.payload.post, ...state.data] };
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
      .addCase(asyncForumPostsAndUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(asyncForumPostsAndUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = [...state.data, ...action.payload.data];
        state.hasMore = action.payload.hasMore;
        state.page = action.payload.page + 1; // Increment page for next fetch
      })
      .addCase(asyncForumPostsAndUsers.rejected, (state, action) => {
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
