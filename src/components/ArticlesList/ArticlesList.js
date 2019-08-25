import React from 'react';
import PropTypes from 'prop-types';

import { ArticlesListWrapper } from './ArticlesList.style';

import ArticleCard from '../ArticleCard/ArticleCard';

const propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
      urlToImage: PropTypes.string,
      title: PropTypes.string,
      publishedAt: PropTypes.string,
      author: PropTypes.string,
      source: PropTypes.shape({
        name: PropTypes.string,
      }),
    }),
  ).isRequired,
};

const ArticlesList = ({ articles }) => (
  <ArticlesListWrapper>
    {articles.map((article) => (
      <ArticleCard article={article} key={`${article.author}-${article.publishedAt}`} />
    ))}
  </ArticlesListWrapper>
);

ArticlesList.propTypes = propTypes;

export default ArticlesList;
