import { createSlice } from 'redux-starter-kit';

const initialState = {
  articles: [],
  isLoading: false,
  error: null,
  page: 1,
  disableMore: false,
  filterValues: {
    from: null,
    topic: null,
    sortBy: null,
  },
};

/* eslint-disable no-param-reassign */
const articleSlice = createSlice({
  slice: 'article',
  initialState,
  reducers: {
    fetchArticles: state => {
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
    updateArticleFilter: (state, action) => {
      state.filterValues[action.payload.key] = action.payload.value;
    },
    clearArticleFilters: state => {
      const nulledFilters = Object.keys(state.filterValues).reduce(
        (obj, key) => ({
          ...obj,
          [key]: null,
        }),
        {},
      );

      state.filterValues = nulledFilters;
    },
  },
});
/* eslint-enable no-param-reassign */

const { actions, reducer } = articleSlice;
export const {
  fetchArticles,
  fetchArticlesSuccess,
  fetchArticlesError,
  updateArticleFilter,
  clearArticleFilters,
} = actions;

export default reducer;
