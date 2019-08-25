import fetch from 'unfetch';

import config from '../../config';

const { API_KEY } = config[process.env.NODE_ENV];

const apiUrl = 'https://newsapi.org/v2/';

export const fetchArticles = async ({
  category,
  from,
  to,
  sortBy,
  pageSize,
  page,
  fetchFn = fetch,
} = {}) => {
  try {
    // Build dict of query params
    const queryParamsDict = {
      category: category ? `&q=${category}` : '',
      from: from ? `&from=${from}` : '',
      to: to ? `&to=${to}` : '',
      sortBy: sortBy ? `&sortBy=${sortBy}` : '',
      pageSize: pageSize ? `&pageSize=${pageSize}` : '',
      page: page ? `&page=${page}` : '',
    };

    const queryParamsString = Object.values(queryParamsDict).join('');

    const response = await fetchFn(`${apiUrl}everything?apiKey=${API_KEY}${queryParamsString}`);
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
