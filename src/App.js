import React from 'react';
import styled from 'styled-components';
import { Home } from './Pages/Home';

const AppWrapper = styled.div`
  background-color: #e7e6dc;
`;

export const App = () => {
  return (
    <AppWrapper>
      <Home />
    </AppWrapper>
  );
};
