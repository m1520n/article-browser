// Change the imports to get the action creators
import articles, { fetchArticles, fetchArticlesSuccess, fetchArticlesError } from './articleSlice';

describe('arcticlesSlice', () => {
  test('should handle fetchArticles action', () => {
    const initialState = {
      articles: [],
      isLoading: false,
      error: null,
      page: 1,
    };

    const fetchArticlesAction = articles(initialState, {
      type: fetchArticles.type,
    });

    expect(fetchArticlesAction).toEqual({
      articles: [],
      isLoading: true,
      error: null,
      page: 1,
    });
  });

  test('should handle fetchArticlesSuccess action', () => {
    const initialState = {
      articles: [],
      isLoading: true,
      error: null,
      page: 1,
    };

    const fetchArticlesSuccessAction = articles(initialState, {
      type: fetchArticlesSuccess.type,
      payload: {
        articles: [{}, {}, {}],
        page: 1,
      },
    });

    expect(fetchArticlesSuccessAction).toEqual({
      articles: [{}, {}, {}],
      isLoading: false,
      error: null,
      page: 1,
    });
  });

  test('should handle fetchArticlesError action', () => {
    const initialState = {
      articles: [],
      isLoading: true,
      error: null,
      page: 1,
    };

    const fetchArticlesErrorAction = articles(initialState, {
      type: fetchArticlesError.type,
      payload: 'ERROR!',
    });

    expect(fetchArticlesErrorAction).toEqual({
      articles: [],
      isLoading: false,
      error: 'ERROR!',
      page: 1,
    });
  });
});
