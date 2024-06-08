import { createSlice } from '@reduxjs/toolkit';

const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState: [],
  reducers: {
    receiveBookmark(state, action){
      return action.payload;
    },
  },
});

export const { receiveBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
