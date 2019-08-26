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
  BaseText,
  Author,
  Source,
} from './ArticleCard.style';

const propTypes = {
  article: PropTypes.shape({
    content: PropTypes.string,
    url: PropTypes.string,
    urlToImage: PropTypes.string,
    title: PropTypes.string,
    publishedAt: PropTypes.string,
    author: PropTypes.string,
    source: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  handleCTA: PropTypes.func.isRequired,
};

const ArticleCard = ({ article, handleCTA }) => (
  <ArticleCardWrapper>
    <CoverImage title={article.title} url={article.urlToImage} />
    <CardGroup>
      <BaseText>{format(parseISO(article.publishedAt), 'MMM dd yyyy')}</BaseText>
      <Author>{article.author}</Author>
      <Source href={article.url} target="_blank" rel="noopener noreferrer">
        {article.source.name}
      </Source>
    </CardGroup>
    <CardTitle>{article.title}</CardTitle>
    <CardText>{article.content}</CardText>
    <ReadMoreButton block handleClick={() => handleCTA(article)}>
      Read More
    </ReadMoreButton>
  </ArticleCardWrapper>
);

ArticleCard.propTypes = propTypes;

export default ArticleCard;
