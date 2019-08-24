import React from 'react';
import renderer from 'react-test-renderer';

import SectionHeader from './SectionHeader';

test('SectionHeader is rendered correctly', () => {
  const component = renderer.create(<SectionHeader sectionName="TEST_SECTION" />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
