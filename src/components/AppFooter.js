import React from 'react';
import styled from 'styled-components'

const FooterDiv = styled.div`
  margin: 0;
  width: 100%;
  height: 300px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  background-color: #477a87;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: center;
    position: relative;
  }
`;

const ContactLink = styled.a`
  padding-left: 20px;
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    text-decoration: none;
    color: #cfc1d1;
  }

  @media (min-width: 1200px) {
    font-size:34px;
    margin-top: 20px;
  }
`;

export const Footer = () => {
  return (
    <FooterDiv>
      <ContactLink
        aria-label="Julias Mail"
        href="mailto:j.bjorkengren@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      > Maila mig!
        </ContactLink>
    </FooterDiv>
  );
}
