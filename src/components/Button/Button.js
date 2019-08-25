import React from 'react';
import PropTypes from 'prop-types';

import { ButtonWrapper } from './Button.style';

const propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'regular', 'big']),
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  handleClick: PropTypes.func,
};

const defaultProps = {
  type: 'primary',
  size: 'regular',
  disabled: false,
  block: false,
  handleClick: () => {},
};

const Button = ({
  children, handleClick, type, size, disabled, block,
}) => (
  <ButtonWrapper type={type} size={size} disabled={disabled} block={block} onClick={handleClick}>
    {children}
  </ButtonWrapper>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
