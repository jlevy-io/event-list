import React, { useState, useEffect } from "react";
import Loader from "components/Loader";
import Container from "./styles";

// getSource checks if url is a string or a File
const getSource = (value) => {
  if (!value) {
    return null;
  }
  if (value === null) {
    return null;
  }
  if (typeof value === "string") {
    return value;
  }
};

const LazyImage = ({
  url,
  full,
  aspectRatio = 16 / 9,
  imageWidth = 400,
  imageHeight = 225,
  altText = "",
  onLoaded,
  smallLoader,
  className,
}) => {
  const placeholderURL = `https://via.placeholder.com/${
    Math.round(imageWidth) + 1
  }x${Math.round(imageHeight) + 1}.png?text=No+Image`;
  const [loaded, setLoaded] = useState(false);
  const [source, setSource] = useState(null);

  const handleError = () => {
    return setSource(placeholderURL);
  };

  const handleLoad = () => {
    if (onLoaded) {
      onLoaded();
    }
    return setLoaded(true);
  };

  useEffect(() => {
    const loadImage = async () => {
      const image = getSource(url);
      return image === null ? setSource(placeholderURL) : setSource(image);
    };
    loadImage();
  }, [url, placeholderURL]);

  return (
    <Container {...{ full, imageWidth, imageHeight, aspectRatio, className }}>
      {!loaded && <Loader position="center" small={smallLoader} />}
      {source && (
        <img
          className={loaded ? "" : "hidden"}
          src={source}
          alt={altText || "Placeholder image"}
          onLoad={() => handleLoad()}
          onError={() => handleError()}
        />
      )}
    </Container>
  );
};

export default LazyImage;
