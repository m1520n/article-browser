import { fetchArticles as fetchArticlesFromApi } from '../../services/news.service';
import {
  fetchArticles,
  fetchArticlesSuccess,
  fetchArticlesError,
  updateArticleFilter,
  clearArticleFilters,
} from '../slices/articleSlice';

export const getArticles = ({
  loadMore = false,
  page,
  pageSize,
  topic,
  from,
  sortBy,
} = {}) => async dispatch => {
  dispatch(fetchArticles());

  try {
    const articles = await fetchArticlesFromApi({
      page,
      pageSize,
      topic,
      from,
      sortBy,
    });

    return dispatch(fetchArticlesSuccess({ articles, loadMore }));
  } catch (e) {
    return dispatch(fetchArticlesError(e.message));
  }
};

export const updateFilterAndFetchArticles = ({
  filterValues,
  newFilterValue,
} = {}) => async dispatch => {
  dispatch(updateArticleFilter(newFilterValue));

  dispatch(fetchArticles());

  try {
    const articles = await fetchArticlesFromApi({
      page: 1,
      pageSize: 6,
      ...filterValues,
      [newFilterValue.key]: newFilterValue.value,
    });

    return dispatch(fetchArticlesSuccess({ articles }));
  } catch (e) {
    return dispatch(fetchArticlesError(e.message));
  }
};

export const clearFiltersAndFetchArticles = () => async dispatch => {
  dispatch(clearArticleFilters());

  dispatch(fetchArticles());

  try {
    const articles = await fetchArticlesFromApi({
      page: 1,
      pageSize: 6,
    });

    return dispatch(fetchArticlesSuccess({ articles }));
  } catch (e) {
    return dispatch(fetchArticlesError(e.message));
  }
};

export default {
  getArticles,
  updateFilterAndFetchArticles,
  clearFiltersAndFetchArticles,
};
