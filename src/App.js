import React from 'react';
import SimpleReactLightbox from "simple-react-lightbox";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"
import styled from "styled-components";
import { Home } from "./Pages/Home"
import { NavBar } from "./components/NavBar"

const AppWrapper = styled.div`
background-color: #e7e6dc;
`;

export const App = () => {
  return (
    <BrowserRouter>
      <SimpleReactLightbox>
        <AppWrapper>
          {/* <NavBar /> */}
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            {/* <Route path="/about/" exact>
            <About />
          </Route> */}
          </Switch>
          {/* <Footer /> */}
        </AppWrapper>
      </SimpleReactLightbox>
    </BrowserRouter>
  );
}


