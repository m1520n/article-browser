import fetch from 'unfetch';
import { format, startOfWeek, startOfMonth, startOfToday } from 'date-fns';

import config from '../../config';

const { API_KEY, API_URL } = config[process.env.NODE_ENV];

export const fetchArticles = async ({
  topic,
  from,
  sortBy,
  pageSize = 6,
  page = 1,
  fetchFn = fetch,
} = {}) => {
  try {
    const dateDict = {
      today: startOfToday(),
      month: startOfMonth(Date.now()),
      week: startOfWeek(Date.now()),
    };

    // Build array of query params
    const queryParams = [
      topic ? `&q=${topic}` : '&q=(travel OR politics OR sports OR tech)',
      from ? `&from=${format(dateDict[from], 'yyyy-MM-dd')}` : '',
      sortBy ? `&sortBy=${sortBy}` : '',
      pageSize ? `&pageSize=${pageSize}` : '',
      page ? `&page=${page}` : '',
    ];

    const queryParamsString = queryParams.join('');

    const response = await fetchFn(`${API_URL}everything?apiKey=${API_KEY}${queryParamsString}`);
    const { status, articles, message } = await response.json();

    if (status !== 'ok') throw new Error(message);

    return articles;
  } catch (error) {
    throw new Error(error);
  }
};

export default {
  fetchArticles,
};
