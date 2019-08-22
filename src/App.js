import React from 'react';
import { Normalize } from 'styled-normalize';
import styled from 'styled-components';

const H1 = styled.h1`
  color: green;
`;
const App = () => (
  <>
    <Normalize />
    <H1> Hello, World! </H1>
  </>
);

export default App;
