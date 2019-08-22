import { createSlice } from 'redux-starter-kit';

const initialState = [];

/* eslint-disable no-param-reassign */
const articlesSlice = createSlice({
  slice: 'articles',
  initialState,
  reducers: {
    fetchArticles(state) {
      state.isLoading = true;
    },
    fetchArticlesSuccess(state, action) {
      state.push(action.payload);
      state.isLoading = false;
    },
    fetchArticlesError(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});
/* eslint-enable no-param-reassign */

const { actions, reducer } = articlesSlice;
export const { fetchArticles, fetchArticlesSuccess, fetchArticlesError } = actions;

export default reducer;
