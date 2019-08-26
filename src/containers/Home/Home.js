import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  getArticles as getArticlesAction,
  updateFilterAndFetchArticles as updateFilterAndFetchArticlesAction,
  clearFiltersAndFetchArticles as clearFiltersAndFetchArticlesAction,
} from '../../store/thunks/articleThunk';

import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Filters from '../../components/Filters/Filters';
import ArticleList from '../../components/ArticlesList/ArticlesList';

import Button from '../../components/Button/Button';

const propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  page: PropTypes.number.isRequired,
  articlesLoading: PropTypes.bool.isRequired,
  filterValues: PropTypes.shape({
    from: PropTypes.string,
    topic: PropTypes.string,
    sortBy: PropTypes.string,
  }).isRequired,
  getArticles: PropTypes.func.isRequired,
  updateFilterAndFetchArticles: PropTypes.func.isRequired,
  clearFiltersAndFetchArticles: PropTypes.func.isRequired,
};

const Home = ({
  articles,
  page,
  articlesLoading,
  filterValues,
  getArticles,
  updateFilterAndFetchArticles,
  clearFiltersAndFetchArticles,
}) => {
  useEffect(() => {
    getArticles(filterValues);
  }, [getArticles]);

  const loadMore = () => {
    getArticles({
      loadMore: true,
      page: page + 1,
      ...filterValues,
    });
  };

  const handleUpdateFilter = ({ key, value }) => {
    updateFilterAndFetchArticles({
      filterValues,
      newFilterValue: { key, value },
    });
  };

  const handleClearFilters = () => {
    clearFiltersAndFetchArticles();
  };

  const handleCTA = article => {
    console.log(article);
  };

  return (
    <>
      <SectionHeader sectionName="HOME" />
      <Filters
        filterValues={filterValues}
        handleClearFilters={handleClearFilters}
        handleUpdateFilter={handleUpdateFilter}
      />
      <ArticleList articles={articles} isLoading={articlesLoading} handleCTA={handleCTA} />
      {articles.length || articlesLoading ? (
        <Button centered type="secondary" disabled={articlesLoading} handleClick={loadMore}>
          {articlesLoading ? 'Loading...' : 'Load More'}
        </Button>
      ) : null}
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
  updateFilterAndFetchArticles: updateFilterAndFetchArticlesAction,
  clearFiltersAndFetchArticles: clearFiltersAndFetchArticlesAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
