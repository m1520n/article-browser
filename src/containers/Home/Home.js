import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import {
  getArticles as getArticlesAction,
  updateFilterAndFetchArticles as updateFilterAndFetchArticlesAction,
  clearFiltersAndFetchArticles as clearFiltersAndFetchArticlesAction,
} from '../../store/thunks/articleThunk';

import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Filters from '../../components/Filters/Filters';
import ArticleList from '../../components/ArticlesList/ArticlesList';
import Article from '../../components/Article/Article';

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

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

const Home = ({
  articles,
  page,
  articlesLoading,
  filterValues,
  getArticles,
  updateFilterAndFetchArticles,
  clearFiltersAndFetchArticles,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState({});

  const modalStyles = {
    content: {
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 'none',
      margin: 0,
      padding: 0,
    },
  };

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
    setActiveArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
      <Modal isOpen={isModalOpen} style={modalStyles}>
        <Article article={activeArticle} handleClose={handleCloseModal} />
      </Modal>
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
