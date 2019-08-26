import styled from 'styled-components';

import { fonts, colors } from '../../styles/variables';

export const ArticleWrapper = styled.div`
  max-width: 60rem;
  font-family: ${fonts.arialMT};
  margin: 0 auto;
`;

export const CoverImage = styled.div`
  width: 100%;
  height: 0;
  padding-top: 40%;
  background-image: url(${({ url }) => url});
  background-size: cover;
  margin-top: 4rem;
`;

export const Link = styled.a`
  display: block;
  text-decoration: none;
`;

export const BackLink = styled.a`
  font-family: ${fonts.arialMT};
  text-decoration: none;
  color: ${colors.royalBlue};
  font-size: 1.6rem;
`;
