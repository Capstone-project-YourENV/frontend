import { create } from 'zustand';
import zukeeper from 'zukeeper';
import createAuthSlice from './authentication/authSlice';

const useBoundStore = create(zukeeper((set) => ({
  ...createAuthSlice(set),
})));

export default useBoundStore;
