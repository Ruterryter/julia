import React from 'react';
import styled from 'styled-components'


const InfoText = styled.p`
  color:  #477a87;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
  margin-bottom: 20px;
  font-family: 'Marcellus', serif;
`

const Heading = styled.h3`
  color:  #477a87;
  font-family: 'Marcellus SC', serif;
  font-size: 34px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 40px;
`

const Portrait = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 50px;
`

export const About = (props) => {
  return (
    <>
      <Heading>Om mig</Heading>
      <Portrait src={require("../assets/julia.JPG")} />
      <InfoText>
        Mitt namn är Julia Björkengren. Jag bor i Skåne tillsammans med mina två katter.
        Jag älskar att måla stort och att låta färgerna och känslan leda mig. Inspirationen hämtar jag ofta ur musik.
        Jag är självlärd och har genom tiden provat mig fram och jag gör helt enkelt det jag själv tycker är givande.
        För mig är målningen ett sätt att helt koppla bort vardagen och bara vara i nuet.
        Ni når mig lättast via mail.
    </InfoText>
    </>
  );
}

