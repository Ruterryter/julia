import React from 'react';
import styled from "styled-components/macro";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { PaintingsCard } from "../components/PaintingsCard"

const GalleryWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly; 
margin: 10px;
`
const Heading = styled.h3`
color:  #477a87;
font-size: 34px;
font-weight: 300;
text-align: center;
margin-bottom: 50px;
font-family: 'Marcellus SC', serif;
`


const options = {
  thumbnails: {
    showThumbnails: true,
    thumbnailsAlignment: 'center',
    thumbnailsContainerBackgroundColor: 'transparent',
    thumbnailsContainerPadding: '0',
    thumbnailsGap: '1px',
    thumbnailsOpacity: 0.4,
    thumbnailsPosition: 'bottom',
    thumbnailsSize: ['100px', '80px']
  },
  caption: {
    captionColor: "#000",
    captionFontFamily: "Raleway, sans-serif",
    captionFontWeight: "300",
    captionTextTransform: "uppercase",
  },
  settings: {
    overlayColor: "#e7e6dc",
    autoplaySpeed: 1500,
    transitionSpeed: 900,
  },
  buttons: {
    backgroundColor: "#e7e6dc",
    iconColor: "#000",
    iconPadding: '5px',
    showAutoplayButton: true,
    showCloseButton: true,
    showDownloadButton: true,
    showFullscreenButton: true,
    showNextButton: true,
    showPrevButton: true,
    showThumbnailsButton: true,
    size: '40px'
  }
}

const paintings = [
  {
    id: 1,
    title: "Havets Djup",
    price: 2000,
    image: require("../assets/havets-djup.jpg")
  },
  {
    id: 2,
    title: "Eldflingor",
    price: 2500,
    image: require("../assets/eldflingor.jpg")
  },
  {
    id: 3,
    title: "Himlavalvet",
    price: 2000,
    image: require("../assets/himlavalvet1.jpg")
  },
  {
    id: 4,
    title: "Jordskred",
    price: 2000,
    image: require("../assets/jordskred.jpg")
  },
  {
    id: 5,
    title: "Kraftfull",
    price: 2500,
    image: require("../assets/kraftfull.jpg")
  },
  {
    id: 6,
    title: "Medusan",
    price: 1500,
    image: require("../assets/medusan.jpg")
  },

];

export const Gallery = () => {
  return (
    <SRLWrapper options={options} >
      <Heading> Mina tavlor </Heading>
      <GalleryWrapper>
        {paintings.map(painting => {
          return (
            <PaintingsCard title={painting.title} price={painting.price} image={painting.image} />
          )
        })}
      </GalleryWrapper>
    </SRLWrapper >
  )
}
