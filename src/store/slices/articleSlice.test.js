// Change the imports to get the action creators
import articles, {
  fetchArticles,
  fetchArticlesSuccess,
  fetchArticlesError,
  updateArticleFilter,
  clearArticleFilters,
} from './articleSlice';

const baseState = {
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

  test('should handle updateArticleFilter action', () => {
    const initialState = {
      ...baseState,
    };

    const updateArticleFilterAction = articles(initialState, {
      type: updateArticleFilter.type,
      payload: {
        value: 'politics',
        key: 'topic',
      },
    });

    expect(updateArticleFilterAction).toEqual({
      ...baseState,
      filterValues: {
        from: null,
        topic: 'politics',
        sortBy: null,
      },
    });
  });

  test('should handle clearArticleFilters action', () => {
    const initialState = {
      ...baseState,
      filterValues: {
        from: 'week',
        topic: 'politics',
        sortBy: 'popularity',
      },
    };

    const clearArticleFiltersAction = articles(initialState, {
      type: clearArticleFilters.type,
      payload: {
        value: 'politics',
        key: 'topic',
      },
    });

    expect(clearArticleFiltersAction).toEqual({
      ...baseState,
      filterValues: {
        from: null,
        topic: null,
        sortBy: null,
      },
    });
  });
});
