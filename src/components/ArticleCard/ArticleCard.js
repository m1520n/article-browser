import React from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';

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
    <CoverImage alt={article.title} url={article.urlToImage} />
    <CardGroup>
      <Date>{format(parseISO(article.publishedAt), 'MMM dd yyyy')}</Date>
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
