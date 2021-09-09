import React from "react";
import Container from "./styles";

const CloseButton = ({ buttonSize = 40, onClick }) => (
  <Container {...{ buttonSize, onClick }}>
    <div className="leftright"></div>
    <div className="rightleft"></div>
    <label>close</label>
  </Container>
);

export default CloseButton;
