import React from 'react';
import styled from "styled-components/macro";

const Card = styled.div`

  // border-radius: 15px;
  background-color: #e7e6dc;
  margin-bottom: 20px;
  overflow: hidden;
  width: 450px;
  display: flex; 
  flex-direction: column; 
  justify-content: flex-start;
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
color: #64a9bc;
font-weight: 300;
`
const Price = styled.h5`
  color: #64a9bc;
  font-weight: 300;
  `



export const PaintingsCard = ({ title, price, image }) => {
  return (
    <>
      <Card>
        <Painting src={image} alt={title} />
        <DetailsContainer >
          <Title>{title}</Title>
          <Price>{price} kr</Price>
        </DetailsContainer>
      </Card>
    </>
  )
}

