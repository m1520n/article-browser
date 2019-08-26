import React from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';

import Layout from '../Layout/Layout';
import SectionHeader from '../SectionHeader/SectionHeader';

import { ArticleWrapper, CoverImage, Link, BackLink } from './Article.style';

import {
  CardTitle,
  CardText,
  CardGroup,
  BaseText,
  Author,
  Source,
  ReadMoreButton,
} from '../ArticleCard/ArticleCard.style';

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
  handleClose: PropTypes.func.isRequired,
};

const Article = ({ article, handleClose }) => (
  <Layout>
    <SectionHeader sectionName={article.title} />
    <BackLink href="#" onClick={handleClose}>
      Return to articles list
    </BackLink>
    <CoverImage title={article.title} url={article.urlToImage} />
    <ArticleWrapper>
      <CardGroup>
        <BaseText>{format(parseISO(article.publishedAt), 'MMM dd yyyy')}</BaseText>
        <Author>{article.author}</Author>
        <Source href={article.url} target="_blank" rel="noopener noreferrer">
          {article.source.name}
        </Source>
      </CardGroup>
      <CardTitle>{article.title}</CardTitle>
      <CardText>{article.content}</CardText>

      <Link href={article.url} target="_blank" rel="noopener noreferrer">
        <ReadMoreButton>Source</ReadMoreButton>
      </Link>
    </ArticleWrapper>
  </Layout>
);

Article.propTypes = propTypes;

export default Article;
