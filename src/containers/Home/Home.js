import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getArticles as getArticlesAction } from '../../store/thunks/articleThunk';

import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ArticleList from '../../components/ArticlesList/ArticlesList';

import Button from '../../components/Button/Button';

const propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  page: PropTypes.number.isRequired,
  articlesLoading: PropTypes.bool.isRequired,
  getArticles: PropTypes.func.isRequired,
};

const Home = ({
  articles, page, getArticles, articlesLoading,
}) => {
  useEffect(() => {
    getArticles();
  }, [getArticles]);

  const loadMore = () => {
    getArticles({ loadMore: true, page: page + 1 });
  };
  return (
    <>
      <SectionHeader sectionName="HOME" />
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
});

const mapDispatchToProps = {
  getArticles: getArticlesAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
