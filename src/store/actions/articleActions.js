import { fetchArticles as fetchArticlesFromApi } from '../../services/news.service';
import { fetchArticles, fetchArticlesSuccess, fetchArticlesError } from '../articlesSlice';

const getArticles = () => async (dispatch) => {
  dispatch(fetchArticles());
  try {
    const articles = await fetchArticlesFromApi();
    return dispatch(fetchArticlesSuccess(articles));
  } catch (e) {
    return dispatch(fetchArticlesError(e.message));
  }
};

export default {
  getArticles,
};
