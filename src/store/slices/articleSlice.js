import { createSlice } from 'redux-starter-kit';

const initialState = {
  articles: [],
  isLoading: false,
  error: null,
  page: 1,
  disableMore: false,
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
      const { articles, loadMore } = payload;

      if (loadMore) {
        state.articles.push(...articles);

        // This is needed because free News API accounts is limited to viewing 100 pages
        if (state.page + 1 <= 100) {
          state.page += 1;
        } else {
          state.disableMore = true;
        }
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
