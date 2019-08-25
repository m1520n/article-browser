import React from 'react';
import renderer from 'react-test-renderer';

import ArticleCard from './ArticleCard';

test('ArticleCard is rendered correctly', () => {
  const article = {
    content: 'CONTENT',
    author: 'AUTHOR',
    urlToImage: 'URL',
    title: 'TITLE',
    publishedAt: '2019-08-10T12:00:00Z',
    source: {
      name: 'NAME',
    },
  };

  const component = renderer.create(<ArticleCard article={article} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
