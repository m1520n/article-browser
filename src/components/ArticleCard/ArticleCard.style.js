import styled from 'styled-components';

import Button from '../Button/Button';

import { fonts, colors, breakpoints } from '../../styles/variables';

export const ArticleCardWrapper = styled.div`
  flex: 0 1 32%;
  width: 32%;
  font-family: ${fonts.arialMT};
  margin: 2.6rem 0 1.7rem;

  @media ${breakpoints.tablet} {
    flex: 1;
    flex: 0 1 48%;
    width: 47%;
  }

  @media ${breakpoints.mobile} {
    flex: 0 1 100%;
    widht: 100%;
  }
`;

export const CoverImage = styled.div`
  width: 100%;
  height: 0;
  padding-top: 56.25%;
  background-image: url(${({ url }) => url});
  background-size: cover;
`;

export const CardTitle = styled.h2`
  font-size: 2.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 1.7rem;
  margin-top: 0.8rem;
  font-weight: normal;
`;

export const CardText = styled.p`
  font-family: ${fonts.arialMT};
  font-size: 1.7rem;
  height: 7.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${colors.darkSlate};
  margin-bottom: 3.2rem;
`;

export const ReadMoreButton = styled(Button)`
  background-color: ${colors.royalBlue};
  color: ${colors.white};
  width: 100%;
  height: 4.9rem;
  margin-top: 3.2rem;
`;

export const CardGroup = styled.div`
  margin-top: 2.4rem;
`;

export const BaseText = styled.span`
  color: ${colors.blackish};
  font-size: 1.4rem;
  font-family: ${fonts.arialMT};
  margin-right: 1.6rem;
`;

export const Author = styled(BaseText)`
  display: inline-block;
  vertical-align: bottom;
  white-space: nowrap;
  width: 10rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Source = styled.a`
  color: ${colors.royalBlue};
  font-size: 1.4rem;
  font-family: ${fonts.arialMT};
  text-decoration: none;

  :hover {
    color: ${colors.sapphire};
  }
`;
