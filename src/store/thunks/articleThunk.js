import { fetchArticles as fetchArticlesFromApi } from '../../services/news.service';
import { fetchArticles, fetchArticlesSuccess, fetchArticlesError } from '../slices/articleSlice';

export const getArticles = (params = { loadMore: false, page: 1 }) => async (dispatch) => {
  const { loadMore, page } = params;
  dispatch(fetchArticles());

  try {
    const articles = await fetchArticlesFromApi({ page });
    return dispatch(fetchArticlesSuccess({ articles, loadMore, page }));
  } catch (e) {
    return dispatch(fetchArticlesError(e.message));
  }
};

export default {
  getArticles,
};
