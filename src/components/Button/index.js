import React from "react";
import { StyledButton } from "./styles";

const Button = ({ children = <div />, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

export default Button;
