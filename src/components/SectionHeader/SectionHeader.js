import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, SectionName } from './SectionHeader.style';

const propTypes = {
  sectionName: PropTypes.string.isRequired,
};

const SectionHeader = ({ sectionName }) => (
  <Wrapper>
    <SectionName>{sectionName}</SectionName>
  </Wrapper>
);

SectionHeader.propTypes = propTypes;

export default SectionHeader;
