import React from 'react';
import styled from 'styled-components/macro';

import { PaintingsCard } from '../components/PaintingsCard';

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 10px;
`;
const Heading = styled.h3`
  color: #477a87;
  font-size: 34px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 50px;
  font-family: 'Marcellus SC', serif;
`;

/* const options = {
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
} */

const paintings = [
  {
    id: 1,
    title: 'Havets Djup',
    price: 2000,
    image: require('../assets/havets-djup.jpg'),
    description: 'Akryl på Canvas 80 x 80cm ',
    sold: false,
  },
  {
    id: 2,
    title: 'Havsanemoner',
    price: 2000,
    image: require('../assets/havsanemoner3.jpg'),
    description: 'Akryl på Canvas 80 x 80 cm',
    sold: false,
  },
  {
    id: 3,
    title: 'Medusan',
    price: 1500,
    image: require('../assets/medusan2.jpg'),
    description: 'Akryl på Canvas 80 x 80 cm',
    sold: false,
  },
  {
    id: 4,
    title: 'Istider',
    price: 1500,
    image: require('../assets/istider.jpg'),
    description: 'Akryl med aska på Canvas 60 x 60 cm',
    sold: false,
  },
  {
    id: 5,
    title: 'Eldflingor',
    price: 2500,
    image: require('../assets/eldflingor.jpg'),
    description: 'Akryl på Canvas 100 x 100cm',
    sold: true,
  },
  {
    id: 6,
    title: 'Vulkan',
    price: 1500,
    image: require('../assets/vulkan.jpg'),
    description: 'Akryl med aska på Canvas 70 x 50cm',
    sold: false,
  },
  {
    id: 7,
    title: 'Draken',
    price: 2500,
    image: require('../assets/draken.jpg'),
    description: 'Akryl på Canvas 50 x 70cm',
    sold: false,
  },
  {
    id: 8,
    title: 'Jordskred',
    price: 2000,
    image: require('../assets/jordskred.jpg'),
    description: 'Akryl på Canvas 80 x 80cm',
    sold: false,
  },
  {
    id: 9,
    title: 'Djuren',
    price: 800,
    image: require('../assets/djuren.jpg'),
    description: 'Akryl på Canvas 45 x 45 cm',
    sold: true,
  },
  {
    id: 10,
    title: 'Kraftfull',
    price: 2500,
    image: require('../assets/kraftfull.jpg'),
    description: 'Akryl på Canvas 80 x 100cm',
    sold: false,
  },
  {
    id: 11,
    title: 'Himlavalvet',
    price: 2000,
    image: require('../assets/himlavalvet1.jpg'),
    description: 'Akryl på Canvas 80 x 100cm',
    sold: true,
  },
  {
    id: 12,
    title: 'Havsbrus',
    price: 1500,
    image: require('../assets/havsbrus.jpg'),
    description: 'Akryl på Canvas 80 x 80 cm',
    sold: true,
  },
  {
    id: 13,
    title: 'Lekfullt vatten',
    price: 800,
    image: require('../assets/lekfullt-vatten.jpg'),
    description: 'Akryl på Canvas 50 x 50 cm',
    sold: true,
  },
];

export const Gallery = () => {
  return (
    <>
      <Heading>Mina tavlor</Heading>
      <GalleryWrapper>
        {paintings.map((painting) => (
          <PaintingsCard
            key={painting.title}
            title={painting.title}
            price={painting.price}
            image={painting.image}
            description={painting.description}
            sold={painting.sold}
          />
        ))}
      </GalleryWrapper>
    </>
  );
};
