// store/slices/blogSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Blog {
  id: number;
  title: string;
  content: string;
  created_at: string;
  user_id: string;
}

interface BlogState {
  blogs: Blog[];
  total: number;
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  blogs: [],
  total: 0,
  loading: false,
  error: null,
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setBlogs(state, action: PayloadAction<{ blogs: Blog[]; total: number }>) {
      state.blogs = action.payload.blogs;
      state.total = action.payload.total;
      state.loading = false;
      state.error = null;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setBlogs, setLoading, setError } = blogSlice.actions;

export default blogSlice.reducer;
