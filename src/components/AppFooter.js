import React from 'react';
import styled from 'styled-components'
import { Icon } from './Icon'

const FooterDiv = styled.div`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #477a87;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const ContactLink = styled.a`
  font-family: 'Marcellus', serif;
  font-size: 18px;
  font-weight: 400;
  color: #e7e6dc;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    text-decoration: none;
    color: #cfc1d1;
  }

  @media (min-width: 1200px) {
    font-size:34px;
  }
`

const AttributionLink = styled.a`
font-family: 'Marcellus', serif;
font-size: 14px;
font-weight: 300;
color: #e7e6dc;
text-decoration: none;
transition: all 0.3s;

&:hover {
  text-decoration: none;
  color: #cfc1d1;
}
`

export const AppFooter = () => {
  return (
    <FooterDiv>
      <ContactLink
        aria-label="Julias Mail"
        href="mailto:j.bjorkengren@gmail.com"
        target="_blank"
        rel="noopener noreferrer">
        Maila mig!
        </ContactLink>
      <ContactLink>
        <Icon width={50} height={"auto"} fill={"#e7e6dc"} />
      </ContactLink>

      <span>Video by <AttributionLink href="https://pixabay.com/users/Engin_Akyurt-3656355/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=20067"> Engin Akyurt</AttributionLink> from <AttributionLink href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=20067">Pixabay</AttributionLink> </span>
      <div>Icons made by <AttributionLink href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</AttributionLink> from <AttributionLink href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</AttributionLink></div>
    </FooterDiv >
  );
}
