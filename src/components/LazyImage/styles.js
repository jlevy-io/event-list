import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: ${({ full, imageWidth }) =>
    full
      ? "100%"
      : imageWidth && typeof width === "number"
      ? `${imageWidth}px`
      : imageWidth};
  height: ${({ full, imageHeight }) =>
    full
      ? "auto"
      : imageHeight && typeof imageHeight === "number"
      ? `${imageHeight}px`
      : imageHeight};
  aspect-ratio: ${({ aspectRatio }) => aspectRatio};
  position: relative;
  img {
    width: ${({ full, imageWidth }) =>
      full
        ? "100%"
        : imageWidth && typeof imageWidth === "number"
        ? `${imageWidth}px`
        : imageWidth};
    height: ${({ full, imageHeight }) =>
      full
        ? "auto"
        : imageHeight && typeof imageHeight === "number"
        ? `${imageHeight}px`
        : imageHeight};
    object-fit: cover;
    &.hidden {
      display: none;
    }
  }
`;

export default Container;
