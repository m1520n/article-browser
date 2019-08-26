/* eslint-disable import/first */
jest.mock('date-fns', () => ({
  startOfWeek: () => '2019-10-08',
  startOfMonth: () => '2019-10-01',
  startOfToday: () => '2019-10-10',
  format: val => val,
}));

import { fetchArticles } from './news.service';
/* eslint-enable import/first */

describe('fetchArticles', () => {
  test('should invoke fetch function with proper query params', async () => {
    const fetchMock = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            status: 'ok',
            articles: [{}, {}, {}],
          }),
      }),
    );
    await fetchArticles({
      fetchFn: fetchMock,
      from: 'today',
      topic: 'sport',
    });

    expect(fetchMock).toHaveBeenCalledWith(
      'http://test-api-url.com/api/everything?apiKey=testApiKey&q=sport&from=2019-10-10&pageSize=6&page=1',
    );
  });

  test('should throw error when fetch function response is not ok', async () => {
    const fetchMock = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            status: 'error',
            message: 'ERROR_MESSAGE',
          }),
      }),
    );

    await expect(
      fetchArticles({
        fetchFn: fetchMock,
        from: '2018-10-20',
        topic: 'politics',
      }),
    ).rejects.toThrow('ERROR_MESSAGE');
  });
});
