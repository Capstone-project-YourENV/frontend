import api from '../../utils/api';

const initialState = {
  loading: false,
  authUser: null,
};

const createAuthSlice = (set) => ({
  ...initialState,
  setAuthUser: async (data) => {
    set({ ...initialState, loading: true });
    try {
      const response = await api.login(data);

      set({ ...initialState, authUser: response.data.user, loading: false });
    } catch (error) {
      set({ ...initialState, error: true, message: error.message });
    }
  },
  unsetAuthUser: async () => {
    set({ ...initialState, loading: true });
    api.putAcessToken('');
    set({ ...initialState, authUser: null, loading: false });
  },
});

export default createAuthSlice;
