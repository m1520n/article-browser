import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedOption: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

const defaultProps = {
  selectedOption: null,
};

const DropDown = ({ options, selectedOption, placeholder }) => {
  const [option, setOption] = useState(selectedOption);

  const handleChange = (selected) => {
    setOption(selected);
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      color: 'black',
      borderRadius: 0,
      borderBottom: '1px solid black',
      boxShadow: null,
      width: '10.4rem',
      '&:hover': {
        color: 'blue',
      },
    }),
    menu: (base) => ({
      ...base,
      color: 'black',
      borderRadius: 0,
      hyphens: 'auto',
      marginTop: 0,
      textAlign: 'left',
      wordWrap: 'break-word',
      width: '14.2rem',
      '&:hover': {
        color: 'blue',
        backgroundColor: 'white',
      },
    }),
    menuList: (base) => ({
      ...base,
      padding: 0,
    }),
    indicatorsContainer: (base) => ({
      ...base,
      borderLeft: 0,
    }),
    option: (base, state) => ({
      ...base,
      color: state.isSelected ? 'red' : 'blue',
    }),
  };

  return (
    <Select
      styles={customStyles}
      value={option}
      onChange={handleChange}
      options={options}
      placeholder={placeholder}
    />
  );
};

DropDown.propTypes = propTypes;
DropDown.defaultProps = defaultProps;

export default DropDown;
