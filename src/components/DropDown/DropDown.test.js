import React from 'react';
import renderer from 'react-test-renderer';

import DropDown from './DropDown';

test('DropDown is rendered correctly', () => {
  const options = [
    { value: 'dog', label: 'Dog' },
    { value: 'cat', label: 'Cat' },
    { value: 'mouse', label: 'Mouse' },
  ];

  const component = renderer.create(<DropDown options={options} placeholder="Select animal..." />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
