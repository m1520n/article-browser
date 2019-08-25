import styled from 'styled-components';

import Button from '../Button/Button';

import { fonts, colors, breakpoints } from '../../styles/variables';

export const ArticleCardWrapper = styled.div`
  flex: 0 1 30%;
  width: 37rem;
  font-family: ${fonts.arialMT};
  margin: 2.6rem 2.7rem 1.7rem 0;

  @media ${breakpoints.tablet} {
    flex: 1;
    flex: 0 1 45%;
  }

  @media ${breakpoints.mobile} {
    flex: 1;
    widht: 100%;
  }
`;

export const CoverImage = styled.div`
  width: 100%;
  height: 21.2rem;
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

export const Date = styled.span`
  color: ${colors.blackish};
  font-size: 1.4rem;
  font-family: ${fonts.arialMT};
  margin-right: 1.6rem;
`;

export const Author = styled.span`
  color: ${colors.blackish};
  font-size: 1.4rem;
  margin-right: 1.6rem;
  font-family: ${fonts.arialMT};
`;

export const Source = styled.a`
  color: ${colors.royalBlue};
  font-size: 1.4rem;
  font-family: ${fonts.arialMT};

  :hover {
    color: ${colors.sapphire};
  }
`;
