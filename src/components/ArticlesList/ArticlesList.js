import React from 'react';
import PropTypes from 'prop-types';

import { ArticlesListWrapper, NoResults } from './ArticlesList.style';

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
  isLoading: PropTypes.bool.isRequired,
  handleCTA: PropTypes.func.isRequired,
};

const renderNoResults = isLoading =>
  !isLoading && <NoResults>No Results - try different filter settings</NoResults>;

const ArticlesList = ({ articles, isLoading, handleCTA }) => (
  <ArticlesListWrapper>
    {articles.length
      ? articles.map(article => (
        <ArticleCard
          article={article}
          key={`${article.author}-${article.publishedAt}`}
          handleCTA={handleCTA}
        />
        ))
      : renderNoResults(isLoading)}
  </ArticlesListWrapper>
);

ArticlesList.propTypes = propTypes;

export default ArticlesList;
