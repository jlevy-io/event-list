import React from "react";
import Lightbox from "components/Lightbox";
import LoaderElement, { Container } from "./styles";

const Loader = ({
  loading = true,
  children = <div />,
  full = false,
  small = false,
  position = "center",
}) => {
  return loading ? (
    <>
      {full ? (
        <Lightbox key={children}>
          <LoaderElement className={small ? "small" : ""}>
            <div></div>
            <div></div>
          </LoaderElement>
        </Lightbox>
      ) : (
        <Container {...{ position }}>
          <LoaderElement className={small ? "small" : ""}>
            <div></div>
            <div></div>
          </LoaderElement>
        </Container>
      )}
    </>
  ) : (
    children
  );
};

export default Loader;
