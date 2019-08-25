import React from 'react';
import renderer from 'react-test-renderer';

import ArticleCard from './ArticleCard';

test('ArticleCard is rendered correctly', () => {
  const article = {
    content: 'CONTENT',
    author: 'AUTHOR',
    urlToImage: 'URL',
    title: 'TITLE',
    publishedAt: 'PUBLISHED_AT',
    source: {
      name: 'NAME',
    },
  };

  const component = renderer.create(<ArticleCard article={article} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
