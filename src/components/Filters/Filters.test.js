import React from 'react';
import renderer from 'react-test-renderer';

import Filters from './Filters';
import Button from '../Button/Button';

test('Filters is rendered correctly', () => {
  const component = renderer.create(<Filters handleClear={() => {}}>TEST BUTTON</Filters>);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should invoke handleClear callback when button is clicked', () => {
  const handleClearMock = jest.fn();
  const component = renderer.create(<Filters handleClear={handleClearMock} />);

  const button = component.root.findByType(Button);
  const mockEvent = { preventDefault: () => {} };
  button.props.handleClick(mockEvent);
  expect(handleClearMock).toHaveBeenCalledWith(mockEvent);
});
