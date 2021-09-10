import React from "react";
import usePortal from "react-useportal";
import Container from "./styles";

const Lightbox = ({ isOpen, onClose, children, animateKey }) => {
  const { Portal } = usePortal({
    bindTo: document && document.body,
    closeOnOutsideClick: false,
    closeOnEsc: true,
    isOpen,
  });

  return (
    <Portal>
      <Container
        key={animateKey}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </Container>
    </Portal>
  );
};

export default Lightbox;
