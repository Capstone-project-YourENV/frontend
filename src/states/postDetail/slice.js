import { createSlice } from '@reduxjs/toolkit';

const postDetailSlice = createSlice({
  name: 'postDetail',
  initialState: null,
  reducers: {
    receivePostDetail(state, action) {
      return action.payload;
    },
    clearPostDetail() {
      return null;
    },
    updatePostDetail(state, action) {
      return { ...state, ...action.payload };
    },
    deletePostDetail(state, action) {
      return state.filter((post) => post.postDetail.id !== action.payload.id);
    },
  },
});

export const {
  receivePostDetail,
  clearPostDetail,
  updatePostDetail,
  deletePostDetail,
} = postDetailSlice.actions;
export default postDetailSlice.reducer;
