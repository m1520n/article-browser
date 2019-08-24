// Change the imports to get the action creators
import articles, { fetchArticles, fetchArticlesSuccess, fetchArticlesError } from './articleSlice';

const baseState = {
  articles: [],
  isLoading: false,
  error: null,
  page: 1,
  disableMore: false,
};

describe('arcticlesSlice', () => {
  test('should handle fetchArticles action', () => {
    const initialState = {
      ...baseState,
    };

    const fetchArticlesAction = articles(initialState, {
      type: fetchArticles.type,
    });

    expect(fetchArticlesAction).toEqual({
      ...baseState,
      isLoading: true,
    });
  });

  test('should handle fetchArticlesSuccess action', () => {
    const initialState = {
      ...baseState,
      isLoading: true,
    };

    const fetchArticlesSuccessAction = articles(initialState, {
      type: fetchArticlesSuccess.type,
      payload: {
        articles: [{}, {}, {}],
      },
    });

    expect(fetchArticlesSuccessAction).toEqual({
      ...baseState,
      articles: [{}, {}, {}],
    });
  });

  test('should handle fetchArticlesSuccess action when loadMore is passed', () => {
    const initialState = {
      ...baseState,
      isLoading: true,
    };

    const fetchArticlesSuccessAction = articles(initialState, {
      type: fetchArticlesSuccess.type,
      payload: {
        articles: [{}, {}, {}],
        loadMore: true,
      },
    });

    expect(fetchArticlesSuccessAction).toEqual({
      ...baseState,
      articles: [{}, {}, {}],
      isLoading: false,
      page: 2,
    });
  });

  test('should handle fetchArticlesSuccess action when loadMore is passed and page count exceeds the free account limit', () => {
    const initialState = {
      ...baseState,
      page: 100,
      isLoading: true,
    };

    const fetchArticlesSuccessAction = articles(initialState, {
      type: fetchArticlesSuccess.type,
      payload: {
        articles: [{}, {}, {}],
        page: 100,
        loadMore: true,
      },
    });

    expect(fetchArticlesSuccessAction).toEqual({
      ...baseState,
      articles: [{}, {}, {}],
      isLoading: false,
      page: 100,
      disableMore: true,
    });
  });

  test('should handle fetchArticlesError action', () => {
    const initialState = {
      ...baseState,
      isLoading: true,
    };

    const fetchArticlesErrorAction = articles(initialState, {
      type: fetchArticlesError.type,
      payload: 'ERROR!',
    });

    expect(fetchArticlesErrorAction).toEqual({
      ...baseState,
      error: 'ERROR!',
    });
  });
});
