import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"
import styled from "styled-components";
import { Home } from "./Pages/Home"

const AppWrapper = styled.div`
background-color: #e7e6dc;
`;

export const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}


