import styled from 'styled-components';

import { fonts, colors } from '../../styles/variables';

const sizes = {
  small: {
    width: '22.5rem',
    height: '3.2rem',
  },
  regular: {
    width: '33rem',
    height: '4.8rem',
  },
  big: {
    width: '22.5rem',
    height: '6.4rem',
  },
};

export const ButtonWrapper = styled.button`
  border: none;
  cursor: pointer;
  font-family: ${fonts.arialMT};
  font-size: 1.4rem;
  line-height: ${({ size }) => sizes[size].height};
  width: ${({ size }) => sizes[size].width};
  ${({ block }) => block && 'width: 100%;'}
  height: ${({ size }) => sizes[size].height};
  background-color: ${({ type }) => (type === 'primary' ? colors.royalBlue : colors.white)};
  color: ${({ type }) => (type === 'primary' ? colors.white : colors.royalBlue)};
  border: 1px solid ${colors.royalBlue};
  ${({ disabled }) => disabled && 'pointer-events: none;'}

  :hover {
    background-color: ${({ type }) => (type === 'primary' ? colors.sapphire : colors.royalBlue)};
    border: 1px solid ${({ type }) => (type === 'primary' ? colors.sapphire : colors.royalBlue)};
    color: ${colors.white};
  }

  /* TODO: Should it use the outline for accesibility?
  /* :focus {
    outline:0;
  } */
`;

export default {
  ButtonWrapper,
};
