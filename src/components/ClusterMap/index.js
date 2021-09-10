import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  MarkerClusterer,
} from "@react-google-maps/api";
import Loader from "components/Loader";
import Container from "./styles";

const { REACT_APP_GOOGLE_API_KEY: googleKey } = process.env;

function ClusterMap({
  mapWidth = 400,
  mapHeight = 300,
  mapLocations = [],
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

  const center = mapLocations[0] || { lat: 40.7128, lng: 74.006 };
  const mapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
  };
  const clusterOptions = {
    averageCenter: true,
    enableRetinaIcons: true,
    maxZoom: 18,
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
            id="cluster-map"
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            options={mapOptions}
          >
            <MarkerClusterer options={clusterOptions}>
              {(clusterer) =>
                mapLocations.map((location, index) => (
                  <Marker
                    key={`marker-${index + 1}`}
                    position={location}
                    title={location.title}
                    clusterer={clusterer}
                  />
                ))
              }
            </MarkerClusterer>
          </GoogleMap>
        ) : (
          <Loader />
        )}
      </LoadScript>
    </Container>
  );
}

export default React.memo(ClusterMap);
