import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getArticles as getArticlesAction } from '../../store/thunks/articleThunk';
import {
  updateArticleFilter as updateArticleFilterAction,
  clearArticleFilters as clearArticleFiltersAction,
} from '../../store/slices/articleSlice';

import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Filters from '../../components/Filters/Filters';
import ArticleList from '../../components/ArticlesList/ArticlesList';

import Button from '../../components/Button/Button';

const propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  page: PropTypes.number.isRequired,
  articlesLoading: PropTypes.bool.isRequired,
  filterValues: PropTypes.shape({
    time: PropTypes.string,
    topic: PropTypes.string,
    popularity: PropTypes.string,
  }).isRequired,
  getArticles: PropTypes.func.isRequired,
  clearArticleFilters: PropTypes.func.isRequired,
  updateArticleFilter: PropTypes.func.isRequired,
};

const Home = ({
  articles,
  page,
  getArticles,
  articlesLoading,
  filterValues,
  clearArticleFilters,
  updateArticleFilter,
}) => {
  useEffect(() => {
    getArticles();
  }, [getArticles]);

  const loadMore = () => {
    getArticles({ loadMore: true, page: page + 1 });
  };

  const handleUpdateFilter = ({ key, value }) => {
    updateArticleFilter({ key, value });
  };

  const handleClearFilters = () => {
    clearArticleFilters();
  };

  return (
    <>
      <SectionHeader sectionName="HOME" />
      <Filters
        filterValues={filterValues}
        handleClearFilters={handleClearFilters}
        handleUpdateFilter={handleUpdateFilter}
      />
      <ArticleList articles={articles} />
      <Button type="secondary" disabled={articlesLoading} handleClick={loadMore}>
        {articlesLoading ? 'Loading...' : 'Load More'}
      </Button>
    </>
  );
};

Home.propTypes = propTypes;

const mapStateToProps = ({ article }) => ({
  articles: article.articles,
  articlesLoading: article.isLoading,
  page: article.page,
  filterValues: article.filterValues,
});

const mapDispatchToProps = {
  getArticles: getArticlesAction,
  updateArticleFilter: updateArticleFilterAction,
  clearArticleFilters: clearArticleFiltersAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
