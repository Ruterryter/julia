import React from 'react';
import styled from "styled-components/macro";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

export const Gallery = () => {
  return (
    <div>
      <SimpleReactLightbox>
        <SRLWrapper>
          <a href={require("../assets/barbara.jpg")} data-attribute="SRL">
            <img src={require("../assets/barbara.jpg")} alt="Barbra" />
          </a>

          <a href={require("../assets/eldflingor.jpg")} data-attribute="SRL">
            <img src={require("../assets/eldflingor.jpg")} alt="Eldflingor" />
          </a>

          <a href={require("../assets/havets-djup.jpg")} data-attribute="SRL">
            <img src={require("../assets/havets-djup.jpg")} alt="Havets Djup" />
          </a>

          <a href={require("../assets/himlavalvet.jpg")} data-attribute="SRL">
            <img src={require("../assets/himlavalvet.jpg")} alt="Himlavalvet" />
          </a>

          <a href={require("../assets/jordskred.jpg")} data-attribute="SRL">
            <img src={require("../assets/jordskred.jpg")} alt="Jordskred" />
          </a>

          <a href={require("../assets/kraftfull.jpg")} data-attribute="SRL">
            <img src={require("../assets/kraftfull.jpg")} alt="Kraftfull" />
          </a>
        </SRLWrapper>
      </SimpleReactLightbox>

    </div>
  );
};

