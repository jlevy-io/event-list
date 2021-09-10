import React from "react";
import Container from "./styles";

const CloseButton = ({ buttonSize = 40, onClick, buttonColor = "#000000" }) => (
  <Container {...{ buttonSize, buttonColor, onClick }}>
    <div className="leftright"></div>
    <div className="rightleft"></div>
    <label>close</label>
  </Container>
);

export default CloseButton;
