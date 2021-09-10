import React, { useState, lazy, Suspense } from "react";
import useZipcode from "services/hooks/useZipcode";
import { AnimatePresence } from "framer-motion";
import { Button } from "@material-ui/core";
import Lightbox from "components/Lightbox";
import Loader from "components/Loader";
import Logo from "assets/location.svg";
import Container, { Inner, LogoWrapper, Controls } from "./styles";
import theme from "containers/Theme/Variables";

const ClusterModal = lazy(() => import("components/ClusterModal"));

const TopBar = ({
  isMobile,
  initialParams,
  params,
  setParams,
  loading,
  mapLocations,
}) => {
  const { zipcode } = useZipcode();
  const [selected, setSelected] = useState(1);
  const [mapModal, showMapModal] = useState(false);

  const buttonList = [
    { value: 2, text: "Nearby Events", disabled: !zipcode },
    { value: 1, text: "All Events", disabled: false },
  ];

  const handleClick = (e) => {
    const value = parseInt(e.currentTarget.value, 10);
    if (value === selected) return;
    setSelected(value);
    return setTimeout(() => {
      if (value === 1) {
        return setParams(initialParams);
      }
      if (value === 2) {
        return setParams({ ...initialParams, zipcode });
      }
      return null;
    }, 100);
  };

  return (
    <Container>
      <Inner {...{ isMobile }}>
        <LogoWrapper {...{ isMobile }}>
          <img src={Logo} alt="Logo" />
          <h1>Event List</h1>
        </LogoWrapper>
        {!isMobile ? (
          <Controls {...{ isMobile }}>
            {selected === 2 && mapLocations && mapLocations[0] ? (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => showMapModal(true)}
              >
                Show Map
              </Button>
            ) : null}
            {selected &&
              buttonList.map(({ value, text, disabled }) => (
                <Button
                  key={value}
                  value={value}
                  disabled={disabled}
                  variant="contained"
                  color={value === selected ? "primary" : "default"}
                  onClick={(e) => handleClick(e)}
                  style={
                    value === selected
                      ? { backgroundColor: theme.colors.primary }
                      : {}
                  }
                >
                  {text}
                </Button>
              ))}
          </Controls>
        ) : null}
      </Inner>
      <AnimatePresence>
        {mapModal && mapLocations && mapLocations[0] ? (
          <Suspense
            fallback={
              <Lightbox>
                <Loader full />
              </Lightbox>
            }
          >
            <ClusterModal
              isOpen={mapModal}
              onClose={() => showMapModal(false)}
              {...{ mapLocations, isMobile }}
            />
          </Suspense>
        ) : null}
      </AnimatePresence>
    </Container>
  );
};

export default TopBar;
