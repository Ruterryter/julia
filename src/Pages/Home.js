import React from "react";
import styled from "styled-components/macro";
import { Header } from "../components/Header";
import { Gallery } from "../components/Gallery";
import { AppFooter } from "../components/AppFooter";

const HomeWrapper = styled.div`
  width: 100%;
  background-color: #e7e6dc;
`;


export const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <Gallery />
      <AppFooter />
    </HomeWrapper>
  );
};