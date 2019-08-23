import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getArticles as getArticlesAction } from '../../store/thunks/articleThunk';

const propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  page: PropTypes.number.isRequired,
  getArticles: PropTypes.func.isRequired,
};

const Home = ({ articles, page, getArticles }) => {
  useEffect(() => {
    getArticles();
  }, [getArticles]);

  const loadMore = () => {
    getArticles({ loadMore: true, page: page + 1 });
  };
  return (
    <div>
      HOME
      {' '}
      {articles && articles.map((article) => <pre key={`${article.publishedAt}`}>{article.content}</pre>)}
      <button type="button" onClick={loadMore}>
        MORE
      </button>
    </div>
  );
};

Home.propTypes = propTypes;

const mapStateToProps = ({ article }) => ({
  articles: article.articles,
  page: article.page,
});

const mapDispatchToProps = {
  getArticles: getArticlesAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
