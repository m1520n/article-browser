import { createSlice } from 'redux-starter-kit';

const initialState = {
  articles: [],
  isLoading: false,
  error: null,
  page: 1,
};

/* eslint-disable no-param-reassign */
const articleSlice = createSlice({
  slice: 'article',
  initialState,
  reducers: {
    fetchArticles: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    fetchArticlesSuccess: (state, action) => {
      const { payload } = action;
      const { articles, loadMore, page } = payload;

      if (loadMore) {
        state.articles.push(...articles);
        state.page = page;
      } else {
        state.articles = articles;
      }
      state.isLoading = false;
    },
    fetchArticlesError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});
/* eslint-enable no-param-reassign */

const { actions, reducer } = articleSlice;
export const { fetchArticles, fetchArticlesSuccess, fetchArticlesError } = actions;

export default reducer;
