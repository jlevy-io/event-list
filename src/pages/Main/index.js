import React from "react";
import InfiniteList from "components/InfiniteList";
import EventCard from "components/EventCard";
import Loader from "components/Loader";
import useWindowDimensions from "services/hooks/useWindow";
import Container from "./styles";

const itemWidth = 332;
const itemHeight = 446;

const Main = ({ isMobile, events, hasNextPage, loading, loadNextPage }) => {
  const { width: windowWidth } = useWindowDimensions();

  return (
    <Container>
      <InfiniteList
        itemWidth={isMobile ? windowWidth : itemWidth}
        itemHeight={itemHeight}
        items={events}
        hasMore={hasNextPage}
        fetchItems={() => (loading ? {} : loadNextPage())}
        isFetching={loading}
        isMobile={isMobile}
      >
        {({
          id,
          title,
          description,
          featured_image_url,
          timeslots,
          ...details
        }) => (
          <EventCard
            key={`event-${id}`}
            details={details}
            imageWidth={isMobile ? windowWidth * 0.96 : itemWidth - 32}
            {...{
              id,
              isMobile,
              title,
              description,
              featured_image_url,
              timeslots,
            }}
          />
        )}
      </InfiniteList>
      {loading ? <Loader /> : null}
    </Container>
  );
};

export default Main;
