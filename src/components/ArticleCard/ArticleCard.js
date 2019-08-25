import React from 'react';
import PropTypes from 'prop-types';

import {
  ArticleCardWrapper,
  CoverImage,
  CardTitle,
  CardText,
  ReadMoreButton,
  CardGroup,
  Date,
  Author,
  Source,
} from './ArticleCard.style';

const propTypes = {
  article: PropTypes.shape({
    content: PropTypes.string,
    urlToImage: PropTypes.string,
    title: PropTypes.string,
    publishedAt: PropTypes.string,
    author: PropTypes.string,
    source: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

const ArticleCard = ({ article }) => (
  <ArticleCardWrapper>
    <CoverImage alt={article.title} src={article.urlToImage} />
    <CardGroup>
      <Date>{article.publishedAt}</Date>
      <Author>{article.author}</Author>
      <Source>{article.source.name}</Source>
    </CardGroup>
    <CardTitle>{article.title}</CardTitle>
    <CardText>{article.content}</CardText>
    <ReadMoreButton block>Read More</ReadMoreButton>
  </ArticleCardWrapper>
);

ArticleCard.propTypes = propTypes;

export default ArticleCard;
