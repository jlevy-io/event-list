import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Loader from "components/Loader";
import Container from "./styles";

const { REACT_APP_GOOGLE_API_KEY: googleKey } = process.env;

function MapView({
  mapWidth = 400,
  mapHeight = 300,
  latitude = 0,
  longitude = 0,
  isMobile = false,
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const containerStyle = isMobile
    ? { width: "400px", height: "300px" }
    : {
        width: `${mapWidth}px`,
        height: `${mapHeight}px`,
      };

  const center = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <Container>
      <LoadScript
        googleMapsApiKey={googleKey}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      >
        {error ? (
          <div>Oops! Something went wrong.</div>
        ) : loaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
            options={{
              disableDefaultUI: true,
              zoomControl: true,
            }}
          >
            <Marker position={center} />
          </GoogleMap>
        ) : (
          <Loader />
        )}
      </LoadScript>
    </Container>
  );
}

export default React.memo(MapView);
