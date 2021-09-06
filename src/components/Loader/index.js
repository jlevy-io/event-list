import React from "react";
import LoaderElement, { Container } from "./styles";

const Loader = ({
  loading = true,
  children = <div />,
  full = false,
  small = false,
  position = "center",
}) => {
  return loading ? (
    <Container className={full ? "full" : ""} {...{ position }}>
      <LoaderElement className={small ? "small" : ""}>
        <div></div>
        <div></div>
      </LoaderElement>
    </Container>
  ) : (
    children
  );
};

export default Loader;
