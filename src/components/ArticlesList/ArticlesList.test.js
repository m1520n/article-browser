import React from 'react';
import renderer from 'react-test-renderer';

import ArticlesList from './ArticlesList';
import Button from '../Button/Button';

import { NoResults } from './ArticlesList.style';

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

describe('ArticlesList', () => {
  test('should be rendered rendered correctly', () => {
    const component = renderer.create(
      <ArticlesList articles={articles} isLoading={false} handleCTA={() => {}} />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should be rendered correctly when there are no articles', () => {
    const component = renderer.create(
      <ArticlesList articles={[]} isLoading={false} handleCTA={() => {}} />,
    );

    expect(component.root.findAllByType(NoResults)).toHaveLength(1);
  });

  test('should invoke handleCTA callback when button is clicked', () => {
    const handleCTAMock = jest.fn();
    const component = renderer.create(
      <ArticlesList articles={articles} isLoading={false} handleCTA={handleCTAMock} />,
    );

    const button = component.root.findAllByType(Button)[0];
    button.props.handleClick();
    expect(handleCTAMock).toHaveBeenCalledWith(articles[0]);
  });
});
