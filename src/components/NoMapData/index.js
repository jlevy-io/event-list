import React from "react";
import NoLocationSVG from "assets/no-location.svg";
import Container, { IconWrapper, TextWrapper } from "./styles";

const NoMapData = ({ containerWidth, containerHeight, isMobile }) => (
  <Container {...{ containerWidth, containerHeight }}>
    <IconWrapper {...{ isMobile }}>
      <img src={NoLocationSVG} alt="No location icon" />
    </IconWrapper>
    <TextWrapper>
      <h4>
        <span>No location data found for this event</span>
      </h4>
    </TextWrapper>
  </Container>
);

export default NoMapData;
