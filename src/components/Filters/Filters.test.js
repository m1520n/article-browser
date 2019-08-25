import React from 'react';
import renderer from 'react-test-renderer';

import Filters from './Filters';
import Button from '../Button/Button';
import DropDown from '../DropDown/DropDown';

const filterValues = {
  time: null,
  popularity: null,
  publishedAt: null,
};

test('Filters is rendered correctly', () => {
  const component = renderer.create(
    <Filters
      filterValues={filterValues}
      handleClearFilters={() => {}}
      handleUpdateFilter={() => {}}
    >
      TEST BUTTON
    </Filters>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should invoke handleClearFilters callback when button is clicked', () => {
  const handleClearFiltersMock = jest.fn();
  const component = renderer.create(
    <Filters
      handleClearFilters={handleClearFiltersMock}
      handleUpdateFilter={() => {}}
      filterValues={filterValues}
    />,
  );

  const button = component.root.findByType(Button);
  const mockEvent = { preventDefault: () => {} };
  button.props.handleClick(mockEvent);
  expect(handleClearFiltersMock).toHaveBeenCalledWith(mockEvent);
});

test('should invoke handleUpdateFilter callback when button is clicked', () => {
  const handleUpdateFilterMock = jest.fn();
  const component = renderer.create(
    <Filters
      filterValues={filterValues}
      handleClearFilters={() => {}}
      handleUpdateFilter={handleUpdateFilterMock}
    />,
  );

  const dropdown = component.root.findAllByType(DropDown)[0];
  dropdown.props.handleSelect('VALUE');
  expect(handleUpdateFilterMock).toHaveBeenCalledWith({ key: 'topic', value: 'VALUE' });
});
