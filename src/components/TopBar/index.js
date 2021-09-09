import React from "react";
import { Button } from "@material-ui/core";
import Logo from "assets/location.svg";
import Container, { Inner, LogoWrapper } from "./styles";

const TopBar = () => {
  return (
    <Container>
      <Inner>
        <LogoWrapper>
          <img src={Logo} alt="Logo" />
          <h1>Event List</h1>
        </LogoWrapper>
        <Button color="primary">Log In</Button>
      </Inner>
    </Container>
  );
};

export default TopBar;
