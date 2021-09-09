import React from "react";
import usePortal from "react-useportal";
import Container from "./styles";

const Lightbox = ({ isOpen, onClose, children }) => {
  const { Portal } = usePortal({
    bindTo: document && document.body,
    closeOnEsc: true,
    isOpen,
  });

  return (
    <Portal>
      <Container
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        {children}
      </Container>
    </Portal>
  );
};

export default Lightbox;
