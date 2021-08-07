import React from 'react';
import SimpleReactLightbox from "simple-react-lightbox";
import styled from "styled-components";
import { Home } from "./Pages/Home"


const AppWrapper = styled.div`
background-color: #e7e6dc;
`;

export const App = () => {
  return (
    <SimpleReactLightbox>
      <AppWrapper>
        <Home />
      </AppWrapper>
    </SimpleReactLightbox>
  );
}


