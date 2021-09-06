import React from "react";
import { useMediaQuery } from "react-responsive";
import InfiniteList from "components/InfiniteList";
import EventCard from "components/EventCard";
import useWindowDimensions from "services/hooks/useWindow";
import Container from "./styles";

const itemWidth = 332;
const itemHeight = 446;

const Main = ({ events, hasNextPage, loading, loadNextPage }) => {
  const { width: windowWidth } = useWindowDimensions();
  const isMobile = useMediaQuery({ maxWidth: 414, orientation: "portrait" });

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
          summary,
          description,
          featured_image_url,
          timeslots,
        }) => (
          <EventCard
            key={`event-${id}`}
            imageWidth={isMobile ? windowWidth * 0.96 : itemWidth - 32}
            {...{
              isMobile,
              title,
              summary,
              description,
              featured_image_url,
              timeslots,
            }}
          />
        )}
      </InfiniteList>
    </Container>
  );
};

export default Main;
