import React from 'react';
import PropTypes from 'prop-types';

import DropDown from '../DropDown/DropDown';
import Button from '../Button/Button';

import { FiltersWrapper, DropDownWrapper } from './Filters.style';

const propTypes = {
  filterValues: PropTypes.shape({
    from: PropTypes.string,
    sortBy: PropTypes.string,
    topic: PropTypes.string,
  }).isRequired,
  handleClearFilters: PropTypes.func.isRequired,
  handleUpdateFilter: PropTypes.func.isRequired,
};

const Filters = ({ filterValues, handleClearFilters, handleUpdateFilter }) => {
  const topicOptions = [
    { value: 'tech', label: 'Technology' },
    { value: 'travel', label: 'Travel' },
    { value: 'politics', label: 'Politics' },
    { value: 'sports', label: 'Sports' },
  ];
  const sortByOptions = [
    { value: 'popularity', label: 'Popularity' },
    { value: 'publishedAt', label: 'Published at' },
  ];
  const fromOptions = [
    { value: 'month', label: 'This month' },
    { value: 'week', label: 'This week' },
    { value: 'today', label: 'Today' },
  ];

  const updateFilter = key => value => {
    handleUpdateFilter({ key, value });
  };

  return (
    <FiltersWrapper>
      <DropDownWrapper>
        <DropDown
          isClearable
          options={topicOptions}
          placeholder="Topic"
          handleSelect={updateFilter('topic')}
          selectedOption={filterValues.topic}
        />
        <DropDown
          isClearable
          options={fromOptions}
          placeholder="Time"
          handleSelect={updateFilter('from')}
          selectedOption={filterValues.from}
        />
        <DropDown
          isClearable
          options={sortByOptions}
          placeholder="Sort by"
          handleSelect={updateFilter('sortBy')}
          selectedOption={filterValues.sortBy}
        />
      </DropDownWrapper>

      <Button type="secondary" size="small" handleClick={handleClearFilters}>
        Clear Filters
      </Button>
    </FiltersWrapper>
  );
};

Filters.propTypes = propTypes;

export default Filters;
