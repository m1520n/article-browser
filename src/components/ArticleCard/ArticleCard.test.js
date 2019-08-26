import React from 'react';
import renderer from 'react-test-renderer';

import ArticleCard from './ArticleCard';
import Button from '../Button/Button';

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

test('should render ArticleCard correctly', () => {
  const component = renderer.create(<ArticleCard article={article} handleCTA={() => {}} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should invoke handleCTA callback when button is clicked', () => {
  const handleCTAMock = jest.fn();
  const component = renderer.create(<ArticleCard article={article} handleCTA={handleCTAMock} />);

  const button = component.root.findByType(Button);
  button.props.handleClick();
  expect(handleCTAMock).toHaveBeenCalledWith(article);
});
