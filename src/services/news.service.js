import fetch from 'unfetch';

import { API_KEY } from '../../config';

const apiUrl = 'https://newsapi.org/v2/everything';

export const fetchArticles = async ({
  category = 'travel', from, to, sortBy, pageSize = 6, page,
} = {}) => {
  try {
    // Build hash table of query params
    const QP = {
      category: category ? `&q=${category}` : '',
      from: from ? `&from=${from}` : '',
      to: to ? `&to=${to}` : '',
      sortBy: sortBy ? `&sortBy=${sortBy}` : '',
      pageSize: pageSize ? `&pageSize=${pageSize}` : '',
      page: page ? `&page=${page}` : '',
    };

    const response = await fetch(
      `${apiUrl}?apiKey=${API_KEY}${QP.category}${QP.from}${QP.to}${QP.sortBy}${QP.pageSize}${QP.page}`,
    );
    const { status, articles, message } = await response.json();

    if (status !== 'ok') throw new Error(message);

    return articles;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    throw new Error(error);
  }
};

export default {
  fetchArticles,
};
