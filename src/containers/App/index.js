// Packages
import React, { useState, lazy, Suspense, useEffect } from "react";
/*
import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
*/
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
  // const history = useHistory();
  // const location = useLocation();

  // Local state
  const [events, setEvents] = useState([]);
  const [params, setParams] = useState(initialParams);
  const { page } = params;

  // Fetch events
  const dataKey = ["getEvents", organization_id, JSON.stringify(params)];
  const {
    data: { data = {} } = {},
    isValidating: loading,
    error,
  } = useSWR(dataKey, API.getEvents);
  const { data: eventsData = [], next: hasNextPage } = data || {};

  // Methods
  const loadNextPage = () => setParams({ ...params, page: page + 1 });
  const reset = () => setParams(initialParams);

  useEffect(() => {
    if (eventsData[0]) {
      setEvents(() =>
        page === 1 ? [...eventsData] : [...events, ...eventsData]
      );
    }

    return () => null;
    // eslint-disable-next-line
  }, [eventsData]);

  return (
    <Container>
      <TopBar />
      <View>
        {error ? (
          <div>Error</div>
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
                events,
                hasNextPage,
                loading,
                loadNextPage,
                reset,
              }}
            />
          </Suspense>
        ) : null}
      </View>
    </Container>
  );
};

export default App;
