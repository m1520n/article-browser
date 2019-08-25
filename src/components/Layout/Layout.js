import React from 'react';
import PropTypes from 'prop-types';

import { LayoutWrapper } from './Layout.style';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const Layout = ({ children }) => <LayoutWrapper>{children}</LayoutWrapper>;

Layout.propTypes = propTypes;

export default Layout;
