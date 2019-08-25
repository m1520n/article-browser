import React from 'react';
import renderer from 'react-test-renderer';

import Layout from './Layout';

test('Layout is rendered correctly', () => {
  const component = renderer.create(
    <Layout>
      <div>
        <h1>TEST</h1>
      </div>
    </Layout>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
