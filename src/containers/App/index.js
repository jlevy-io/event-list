// Packages
import React, { useState, lazy, Suspense, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import useSWR from "swr";
import { DateTime } from "luxon";

// Components
import TopBar from "components/TopBar";
import Loader from "components/Loader";

// Services
import API from "services/api";

// Styles
import Container, { View, LoaderWrapper } from "./styles";

// Pages
const Main = lazy(() => import("pages/Main"));

// Constants
const organization_id = 1;
const startDate = DateTime.now().startOf("day");
const endDate = startDate.plus({ days: 30 }).endOf("day");
const initialParams = {
  page: 1,
  per_page: 25,
  timeslot_start: "gte_now",
  timeslot_end: `lte_${Math.round(endDate.toSeconds())}`,
};

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 600, orientation: "portrait" });

  // Local state
  const [events, setEvents] = useState([]);
  const [params, setParams] = useState(initialParams);
  const { page } = params;

  // Fetch events
  const dataKey = [
    params && params.zipcode
      ? `getNearbyEventsPage${page}`
      : `getAllEventsPage${page}`,
    organization_id,
    JSON.stringify(params),
  ];
  const {
    data: { data = {} } = {},
    isValidating: loading,
    error,
  } = useSWR(dataKey, API.getEvents, {});

  const { data: eventsData = [], next: hasNextPage } = data || {};

  const mapLocations = React.useMemo(
    () =>
      !loading && events && events[0] && params && params.zipcode
        ? events
            .filter(({ location }) => location)
            .map(({ title, location }) => ({ title, ...location }))
            .filter(({ location }) => location)
            .map(({ title, location }) => ({
              title,
              lat: location.latitude,
              lng: location.longitude,
            }))
        : [],
    [events, params, loading]
  );

  // Methods
  const loadNextPage = () => setParams({ ...params, page: page + 1 });
  const resetData = () => setParams(initialParams);

  useEffect(() => {
    if (eventsData[0]) {
      setEvents((events) =>
        page === 1 ? [...eventsData] : [...events, ...eventsData]
      );
    }

    return () => null;
  }, [eventsData, page]);

  return (
    <Container>
      <TopBar
        {...{
          isMobile,
          initialParams,
          params,
          setParams,
          loading,
          mapLocations,
        }}
      />
      <View>
        {error ? (
          <div>Error</div>
        ) : page === 1 && loading ? (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        ) : events && events[0] ? (
          <Suspense
            fallback={
              <LoaderWrapper>
                <Loader />
              </LoaderWrapper>
            }
          >
            <Main
              {...{
                isMobile,
                events,
                hasNextPage,
                loading,
                loadNextPage,
                resetData,
              }}
            />
          </Suspense>
        ) : null}
      </View>
    </Container>
  );
};

export default App;
