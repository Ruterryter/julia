import React from 'react';
import styled from 'styled-components'
import mala from '../assets/mala.mp4'


const HeaderContainer = styled.div`
  position: relative;
  min-height: 200px;
  max-height: 500px;
  overflow: hidden;
  margin-bottom: 100px;
`

const Video = styled.video`
    width: 100%;
    height: 100%; 
    `

const NameContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`

const ArtistName = styled.h1`
  font-family: 'Monoton';
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  color: #477a87;

  &:hover {
    text-decoration: none;
    color: #cfc1d1;

  @media (max-width: 768px) {
  font-size: 32px;
}
`

export const Header = () => {

  return (
    <HeaderContainer>

      <Video autoPlay="autoplay" loop="loop" muted>
        <source src={mala} type="video/mp4" />
        Your browser does not support the video tag
    </Video>
      <NameContainer>
        <ArtistName>Julia  Björkengren</ArtistName>
      </NameContainer>
    </HeaderContainer>
  )
};
