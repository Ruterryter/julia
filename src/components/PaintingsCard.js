import React from 'react';
import styled from "styled-components/macro";

const Card = styled.div`
  background-color: #e7e6dc;
  margin-bottom: 20px;
  overflow: hidden;
  width: 450px;
  display: flex; 
  flex-direction: column; 
  justify-content: flex-start;
  cursor: pointer;

  &:hover {
    border: 1px solid;
    padding: 10px;
    box-shadow: 5px 10px;
`;

const DetailsContainer = styled.div`
  padding: 20px;
  display: flex; 
  flex-direction: column; 
  align-content: flex-start;
  ;
`

const Painting = styled.img`
  width: 100%;
`;

const Title = styled.h3`
  margin-bottom: 7px;
  color: #477a87;
  font-weight: 300;
  font-family: 'Marcellus', serif;
`
const Price = styled.h5`
  color: #64a9bc;
  font-weight: 500;
  font-family: 'Marcellus', serif;
  `

const Description = styled.h5`
  color: #477a87;
  font-weight: 300;
  font-family: 'Marcellus', serif;
  margin-bottom: 20px;
`



export const PaintingsCard = ({ title, price, image, description }) => {
  return (
    <>
      <Card>
        <Painting src={image} alt={title} />
        <DetailsContainer >
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Price>{price} kr</Price>
        </DetailsContainer>
      </Card>
    </>
  )
}

