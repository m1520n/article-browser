import React from 'react';
import PropTypes from 'prop-types';

import SectionHeader from '../../components/SectionHeader/SectionHeader';

const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const Article = ({ match }) => (
  <div>
    <SectionHeader sectionName="Article title" />
    {match.params.id}
  </div>
);

Article.propTypes = propTypes;

export default Article;
