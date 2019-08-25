import styled from 'styled-components';

import DropDown from '../DropDown/DropDown';

export const FiltersWrapper = styled.nav`
  display: flex;
  width: 100%;
  height: 6.4rem;
  margin-top: 4.5rem;
  justify-content: space-between;
`;

export const DropDownWrapper = styled.div`
  display: flex;
`;

export const StyledDropdown = styled(DropDown)`
  &&& {
    margin-right: 1.7rem;
  }
`;
