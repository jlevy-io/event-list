import React, { useState, useCallback, useEffect } from "react";
import { useResizeDetector } from "react-resize-detector";
import { lock, clearBodyLocks } from "tua-body-scroll-lock";
import getScrollbarWidth from "get-scrollbar-width";
import Lightbox from "components/Lightbox";
import ClusterMap from "components/ClusterMap";
import CloseButton from "components/CloseButton";
import Container, { CloseWrapper } from "./styles";

const scrollbarWidth = getScrollbarWidth();

const ClusterModal = ({ mapLocations, isOpen, onClose, isMobile }) => {
  const [isResizing, setIsResizing] = useState(false);

  const onResize = useCallback(() => {
    if (isResizing) return;
    setIsResizing(true);
    return setTimeout(() => setIsResizing(false), 100);
    // eslint-disable-next-line
  }, []);

  const { width, height, ref: resizeRef } = useResizeDetector({ onResize });

  useEffect(() => {
    const targetElement = document.getElementById("cluster-container");
    if (isMobile) {
      lock(targetElement);
    } else {
      lock(targetElement);
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      clearBodyLocks();
      document.body.style.paddingRight = "0px";
    };
  });

  const mapKey = mapLocations[0].lat + mapLocations[0].lng;

  return (
    <Lightbox key={mapKey} animateKey={mapKey} {...{ isOpen, onClose }}>
      <CloseWrapper>
        <CloseButton
          onClick={onClose}
          buttonSize={isMobile ? 25 : 40}
          buttonColor={isMobile ? "#000000" : "#ffffff"}
        />
      </CloseWrapper>
      <Container
        ref={resizeRef}
        key={mapKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2 } }}
        exit={{ opacity: 0 }}
        id="cluster-container"
        {...{ isMobile }}
        onClick={(e) => e.stopPropagation()}
      >
        <ClusterMap
          mapWidth={width}
          mapHeight={height}
          {...{ mapLocations, isMobile }}
        />
      </Container>
    </Lightbox>
  );
};

export default ClusterModal;
