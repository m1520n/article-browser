import React from 'react';
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
  isClearable: PropTypes.bool,
  handleSelect: PropTypes.func.isRequired,
};

const defaultProps = {
  selectedOption: null,
  isClearable: false,
};

const DropDown = ({
  options, selectedOption, placeholder, isClearable, handleSelect,
}) => {
  const handleChange = ({ value }) => {
    let newValue;
    if (isClearable) {
      newValue = value === selectedOption ? null : value;
    } else {
      newValue = value;
    }
    handleSelect(newValue);
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

  const values = options.reduce(
    (obj, option) => ({
      ...obj,
      [option.value]: option,
    }),
    {},
  );

  return (
    <Select
      styles={customStyles}
      value={values[selectedOption] || null}
      onChange={handleChange}
      options={options}
      placeholder={placeholder}
    />
  );
};

DropDown.propTypes = propTypes;
DropDown.defaultProps = defaultProps;

export default DropDown;
