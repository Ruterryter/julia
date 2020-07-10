import React from "react";
import styled from "styled-components/macro";

const HomeWrapper = styled.div`
  width: 100%;
  background-color: #e7e6dc;
`;


const HlDiv = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.h1`
  margin-top: 20px;
  font-family: "Poppins";
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  color: #1A6575;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Home = () => {


  return (
    <HomeWrapper>

      <HlDiv>
        <Title>Julia Björkengren Artist</Title>

      </HlDiv>

    </HomeWrapper>
  );
};