import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  hasMore: true,
  isLoading: false,
  error: null,
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    receivePosts(state, action) {
      return { ...state, data: action.payload };
    },
    forumPost: {
      reducer(state, action) {
        const updatedPosts = [...state.data, ...action.payload.post];
        return {
          ...state,
          data: updatedPosts,
          hasMore: action.payload.post.length === 10,
          isLoading: false,
        };
      },
      prepare(post) {
        return { payload: { post } };
      },
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
});

export const {
  receivePosts,
  forumPost,
  addPost,
  updatePost,
  deletePost,
  bookmarkPost,
} = postSlice.actions;

export default postSlice.reducer;
