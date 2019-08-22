import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const Article = ({ match }) => (
  <div>
Article
    {match.params.id}
  </div>
);

Article.propTypes = propTypes;

export default Article;
