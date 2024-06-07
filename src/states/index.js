import { configureStore } from '@reduxjs/toolkit';
import authUserSlice from './authentication/slice';
import preloadSlice from './isPreload/slice';
import userSlice from './users/slice';
import postSlice from './posts/slice';
import postDetailSlice from './postDetail/slice';

const store = configureStore({
  reducer: {
    authUser: authUserSlice,
    isPreload: preloadSlice,
    users: userSlice,
    posts: postSlice,
    postDetail: postDetailSlice,
  },
});

export default store;
