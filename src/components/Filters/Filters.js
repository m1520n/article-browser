import React from 'react';
import PropTypes from 'prop-types';

import DropDown from '../DropDown/DropDown';
import Button from '../Button/Button';

import { FiltersWrapper, DropDownWrapper, StyledDropdown } from './Filters.style';

const propTypes = {
  handleClear: PropTypes.func.isRequired,
};

const Filters = ({ handleClear }) => {
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
  const dateOptions = [
    { value: 'month', label: 'This month' },
    { value: 'week', label: 'This week' },
    { value: 'today', label: 'Today' },
  ];

  return (
    <FiltersWrapper>
      <DropDownWrapper>
        <StyledDropdown isClearable options={topicOptions} placeholder="Topic" />
        <DropDown isClearable options={sortByOptions} placeholder="Time" />
        <DropDown isClearable options={dateOptions} placeholder="Popularity" />
      </DropDownWrapper>

      <Button type="secondary" size="small" handleClick={handleClear}>
        Clear Filters
      </Button>
    </FiltersWrapper>
  );
};

Filters.propTypes = propTypes;

export default Filters;
