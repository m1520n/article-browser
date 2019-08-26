import styled from 'styled-components';

import { fonts, colors } from '../../styles/variables';

export const ArticlesListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 6.5rem;
`;

export const NoResults = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  font-family: ${fonts.arialMT};
  font-size: 2.4rem;
  color: ${colors.darkSlate};
`;
