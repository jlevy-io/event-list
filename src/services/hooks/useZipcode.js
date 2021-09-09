import { useState, useEffect, useCallback } from "react";
import useGeolocation from "react-hook-geolocation";
import API from "services/api";

export default function useZipcode(enabled) {
  const geolocation = useGeolocation();
  const { latitude, longitude } = geolocation || {};

  const [error, setError] = useState(false);
  const [zipcode, setZipcode] = useState(
    enabled ? () => JSON.parse(localStorage.getItem("zipcode")) : ""
  );

  const findZipcode = (values) => {
    const addressComponents = values.map(
      ({ address_components }) => address_components
    );
    const zipObjArray = addressComponents.map((entry) => {
      return entry
        .map((entry) => entry)
        .filter(({ types }) => types[0] === "postal_code")[0];
    });

    const zipList = [
      ...new Set(
        zipObjArray
          .filter((entry) => entry !== undefined)
          .map(({ short_name }) => short_name)
      ),
    ];

    if (zipList && zipList[0]) {
      return zipList[0];
    }

    return null;
  };

  const updateZipcode = useCallback(async () => {
    try {
      if (!latitude || !longitude) return;
      const response = await API.getZipcode({ latitude, longitude });
      if (response && response.data) {
        const { results } = response.data;
        const result = findZipcode(results);
        if (result) {
          localStorage.setItem("zipcode", result);
          return setZipcode(result);
        }
      }
      return null;
    } catch (err) {
      setError(true);
    }
  }, [latitude, longitude]);

  useEffect(() => {
    if (!zipcode && enabled) {
      updateZipcode();
    }
  }, [zipcode, updateZipcode, enabled]);

  return { zipcode, setZipcode, error };
}
