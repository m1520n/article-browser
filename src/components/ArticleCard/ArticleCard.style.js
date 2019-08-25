import styled from 'styled-components';

import Button from '../Button/Button';

import { fonts, colors } from '../../styles/variables';

export const ArticleCardWrapper = styled.div`
  flex: 0 1 30%;
  font-family: ${fonts.arialMT};
  width: 37rem;
  margin: 2.6rem 2.7rem 1.7rem 0;
`;

export const CoverImage = styled.img`
  width: 37rem;
  height: 20.8rem;
`;

export const CardTitle = styled.h2`
  font-size: 2.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardText = styled.p`
  font-family: ${fonts.arialMT};
  font-size: 1.7rem;
  height: 7.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ReadMoreButton = styled(Button)`
  background-color: ${colors.royalBlue};
  color: ${colors.white};
  width: 100%;
  height: 4.9rem;
`;

export const CardGroup = styled.div``;

export const Date = styled.span``;

export const Author = styled.span``;

export const Source = styled.a``;
