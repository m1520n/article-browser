import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import { fonts, colors } from '../../styles/variables';

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

const DropDown = ({ options, selectedOption, placeholder, isClearable, handleSelect }) => {
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
    control: base => ({
      ...base,
      color: colors.blackish,
      border: 0,
      borderRadius: 0,
      borderBottom: `.1rem solid ${colors.whiteSmoke}`,
      boxShadow: null,
      width: '10.4rem',
      marginRight: '1.6rem',
      fontFamily: fonts.arialMT,
      fontSize: '1.4rem',
      '&:hover': {
        color: colors.royalBlue,
      },
    }),
    menu: base => ({
      ...base,
      borderRadius: 0,
      hyphens: 'auto',
      marginTop: 0,
      textAlign: 'left',
      wordWrap: 'break-word',
      width: '14.2rem',
      fontFamily: fonts.arialMT,
      fontSize: '1.4rem',
      top: '3.8rem',
    }),
    indicatorContainer: base => ({
      ...base,
      padding: 0,
    }),

    indicatorSeparator: base => ({
      ...base,
      background: 'none',
    }),
    option: (base, state) => ({
      ...base,
      color: state.isSelected ? colors.royalBlue : colors.blackish,
      margin: 0,
      background: 'none',
      '&:hover': {
        color: colors.black,
      },
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
