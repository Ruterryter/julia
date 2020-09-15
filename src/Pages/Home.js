import React from "react";
import styled from "styled-components/macro";
import { Header } from "../components/Header";
import { Gallery } from "../components/Gallery";

const HomeWrapper = styled.div`
  width: 100%;
  background-color: #e7e6dc;
  // background-color: #a9b2bb;
`;


export const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <Gallery />
    </HomeWrapper>
  );
};