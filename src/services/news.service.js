import fetch from 'unfetch';

import { API_KEY } from '../../config';

const apiUrl = 'https://newsapi.org/v2/everything';

export const fetchArticles = async () => {
  try {
    const response = await fetch(`${apiUrl}&apiKey=${API_KEY}`);
    const parsed = await response.json();
    console.log(parsed);
  } catch (error) {
    console.log(error);
  }
};

export default {
  fetchArticles,
};
