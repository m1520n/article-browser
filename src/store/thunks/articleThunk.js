import { fetchArticles as fetchArticlesFromApi } from '../../services/news.service';
import { fetchArticles, fetchArticlesSuccess, fetchArticlesError } from '../slices/articleSlice';

export const getArticles = ({
  loadMore = false,
  page = 1,
  pageSize = 6,
  category = '(travel AND politics AND sports AND tech)',
  from,
  to,
  sortBy,
} = {}) => async (dispatch) => {
  dispatch(fetchArticles());

  try {
    const articles = await fetchArticlesFromApi({
      page,
      pageSize,
      category,
      from,
      to,
      sortBy,
    });

    return dispatch(fetchArticlesSuccess({ articles, loadMore }));
  } catch (e) {
    return dispatch(fetchArticlesError(e.message));
  }
};

export default {
  getArticles,
};
