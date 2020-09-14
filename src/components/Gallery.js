import React from 'react';
import styled from "styled-components/macro";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { PaintingsCard } from "../components/PaintingsCard"

const GalleryWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly; 
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
    captionColor: "#e7e6dc",
    captionFontFamily: "Raleway, sans-serif",
    captionFontWeight: "300",
    captionTextTransform: "uppercase",
  },
  settings: {
    overlayColor: "#000",
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
    title: "Eldflingor",
    price: 2500,
    image: require("../assets/eldflingor.jpg")
  },
  {
    id: 2,
    title: "Himlavalvet",
    price: 2000,
    image: require("../assets/himlavalvet1.jpg")
  },
  {
    id: 3,
    title: "Jordskred",
    price: 2000,
    image: require("../assets/jordskred.jpg")
  },
  {
    id: 4,
    title: "Kraftfull",
    price: 2500,
    image: require("../assets/kraftfull.jpg")
  },
  {
    id: 5,
    title: "Havets Djup",
    price: 2000,
    image: require("../assets/havets-djup.jpg")
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
