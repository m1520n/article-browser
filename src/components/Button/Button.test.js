import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';
import { ButtonWrapper } from './Button.style';

test('Button is rendered correctly', () => {
  const component = renderer.create(<Button>TEST BUTTON</Button>);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should invoke handleClick callback when button is clicked', () => {
  const handleClickMock = jest.fn();
  const component = renderer.create(<Button handleClick={handleClickMock}>TEST BUTTON</Button>);

  const button = component.root.findByType(ButtonWrapper);
  const mockEvent = { preventDefault: () => {} };
  button.props.onClick(mockEvent);
  expect(handleClickMock).toHaveBeenCalledWith(mockEvent);
});
