import React from 'react';
import renderer from 'react-test-renderer';

import ArticlesList from './ArticlesList';

test('ArticlesList is rendered correctly', () => {
  const articles = [
    {
      publishedAt: '2018-08-26',
      author: 'Dan Abramov',
      source: {
        name: 'Medium',
      },
    },
    {
      publishedAt: '2019-01-23',
      author: 'Kyle Simpson',
      source: {
        name: 'HackerNoon',
      },
    },
    {
      publishedAt: '2018-03-23',
      author: 'Douglas Crockford',
      source: {
        name: 'Medium',
      },
    },
  ];

  const component = renderer.create(<ArticlesList articles={articles} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
