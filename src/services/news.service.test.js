import { fetchArticles } from './news.service';

describe('fetchArticles', () => {
  test('should invoke fetch function with proper query params', async () => {
    const fetchMock = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({
        status: 'ok',
        articles: [{}, {}, {}],
      }),
    }));
    await fetchArticles({
      fetchFn: fetchMock,
      from: '2018-09-20',
      to: '2019-10-20',
      category: 'sport',
    });

    expect(fetchMock).toHaveBeenCalledWith(
      'https://newsapi.org/v2/everything?apiKey=testApiKey&q=sport&from=2018-09-20&to=2019-10-20&pageSize=6',
    );
  });

  test('should throw error when fetch function response is not ok', async () => {
    const fetchMock = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({
        status: 'error',
        message: 'ERROR_MESSAGE',
      }),
    }));

    await expect(
      fetchArticles({
        fetchFn: fetchMock,
        from: '2018-10-20',
        to: '2019-10-21',
        category: 'politics',
      }),
    ).rejects.toThrow('ERROR_MESSAGE');
  });
});
