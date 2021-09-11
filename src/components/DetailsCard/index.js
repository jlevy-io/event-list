import React, { useState, useCallback, useEffect, Fragment } from "react";
import { useResizeDetector } from "react-resize-detector";
import { lock, clearBodyLocks } from "tua-body-scroll-lock";
import getScrollbarWidth from "get-scrollbar-width";
import { DateTime } from "luxon";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import LazyImage from "components/LazyImage";
import Lightbox from "components/Lightbox";
import MapView from "components/MapView";
import NoMapData from "components/NoMapData";
import CloseButton from "components/CloseButton";
import Loader from "components/Loader";
import Container, {
  Header,
  TitleSection,
  CloseWrapper,
  CloseWrapperMobile,
  TitleDetails,
  InfoSpan,
  Content,
  LeftSection,
  RightSection,
  Banner,
  DetailsWrapper,
} from "./styles";

const scrollbarWidth = getScrollbarWidth();

const DetailsCard = ({
  id,
  isOpen,
  onClose,
  isMobile,
  title,
  description,
  featured_image_url,
  timeslots,
  details,
}) => {
  const [isResizing, setIsResizing] = useState(false);

  const onResize = useCallback(() => {
    if (isResizing) return;
    setIsResizing(true);
    return setTimeout(() => setIsResizing(false), 100);
    // eslint-disable-next-line
  }, []);

  const { width, height, ref: resizeRef } = useResizeDetector({ onResize });

  const {
    event_type,
    sponsor,
    is_virtual,
    timezone,
    location: eventLocation,
  } = details || {};
  const {
    address_lines,
    country,
    locality,
    location: { latitude, longitude } = {},
    postal_code,
    region,
    venue,
  } = eventLocation || {};

  const getEventText = (value) => {
    switch (value) {
      case "MEETING":
        return "Meeting";
      case "COMMUNITY":
        return "Community";
      case "VOTER_REG":
        return "Voter Registration";
      case "CANVASS":
        return "Canvassing";
      case "MEET_GREET":
        return "Meet & Greet";
      case "PHONE_BANK":
        return "Phone Bank";
      case "TEXT_BANK":
        return "Text Bank";
      case "TRAINING":
        return "Training";
      case "OTHER":
        return "Other";
      case "HOUSE_PARTY":
        return "House Party";
      default:
        return value;
    }
  };

  const formatDate = (start, timeZone) => {
    const startDate = new DateTime.fromSeconds(start).setZone(
      timeZone || "system"
    );
    return startDate.toLocaleString(DateTime.DATE_HUGE);
  };

  const formatTime = (start, end, timeZone) => {
    const startDate = new DateTime.fromSeconds(start).setZone(
      timeZone || "system"
    );
    const endDate = new DateTime.fromSeconds(end).setZone(timeZone || "system");
    return `${startDate.toLocaleString(
      DateTime.TIME_SIMPLE
    )} to ${endDate.toLocaleString({
      ...DateTime.TIME_SIMPLE,
      timeZoneName: "short",
    })}`;
  };

  useEffect(() => {
    const targetElement = document.getElementById("details-container");
    if (isMobile) {
      lock(targetElement);
    } else {
      lock(targetElement);
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      clearBodyLocks();
      document.body.style.paddingRight = "0px";
    };
  });

  return (
    <Lightbox key={id} animateKey={id} {...{ isOpen, onClose }}>
      {!isMobile ? (
        <CloseWrapper>
          <CloseButton
            onClick={onClose}
            buttonSize={40}
            buttonColor={"#ffffff"}
            {...{ isMobile }}
          />
        </CloseWrapper>
      ) : null}
      <Container
        key={id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2 } }}
        exit={{ opacity: 0 }}
        id="details-container"
        {...{ isMobile }}
        onClick={(e) => e.stopPropagation()}
      >
        {isMobile ? (
          <CloseWrapperMobile>
            <CloseButton
              onClick={onClose}
              buttonSize={25}
              buttonColor={"#000000"}
              {...{ isMobile }}
            />
          </CloseWrapperMobile>
        ) : null}
        <Header>
          <TitleSection {...{ isMobile }}>
            <h1 className="condensed">
              <span>{title}</span>
            </h1>
            <TitleDetails {...{ isMobile }}>
              {event_type ? (
                <InfoSpan>
                  <span>Event Type:</span>
                  <span>{getEventText(event_type)}</span>
                </InfoSpan>
              ) : null}

              {sponsor && sponsor.name ? (
                <InfoSpan>
                  <span>Sponsor:</span>
                  <span>{sponsor.name}</span>
                </InfoSpan>
              ) : null}
            </TitleDetails>
          </TitleSection>
        </Header>
        <Content {...{ isMobile }}>
          <LeftSection>
            <Banner ref={resizeRef} {...{ isMobile }}>
              {width && height && !isResizing ? (
                <LazyImage
                  url={featured_image_url}
                  imageWidth={width}
                  imageHeight={height}
                  aspectRatio={isMobile ? 16 / 9 : 2}
                  full={isMobile}
                />
              ) : (
                <Loader />
              )}
            </Banner>
            <div>
              <h2 className="condensed">
                <span>Description</span>
              </h2>
              <ReactMarkdown
                children={description}
                remarkPlugins={[remarkGfm]}
              />
            </div>
          </LeftSection>
          <RightSection>
            {latitude && longitude ? (
              <MapView
                mapWidth={width}
                mapHeight={height}
                {...{ latitude, longitude, isMobile }}
              />
            ) : (
              <NoMapData containerWidth={width} containerHeight={height} />
            )}
            <div>
              <h2 className="condensed">
                <span>Details</span>
              </h2>
              <DetailsWrapper>
                {is_virtual ? (
                  <InfoSpan {...{ isMobile }}>
                    <span>Location:</span>
                    <span>Virtual Event</span>
                  </InfoSpan>
                ) : eventLocation ? (
                  <>
                    {venue ? (
                      <InfoSpan {...{ isMobile }}>
                        <span>Venue:</span>
                        <span>{venue}</span>
                      </InfoSpan>
                    ) : null}
                    <InfoSpan {...{ isMobile }}>
                      <span>Location:</span>
                      <span>{`${locality ? locality + ", " : ""}${
                        region ? region + ", " : ""
                      }${country + " " || " "}${postal_code || ""}`}</span>
                    </InfoSpan>
                    {address_lines && address_lines[0] ? (
                      <InfoSpan {...{ isMobile }}>
                        <span>Address:</span>
                        <span>{address_lines[0]}</span>
                      </InfoSpan>
                    ) : null}
                    {address_lines && address_lines[1] ? (
                      <InfoSpan {...{ isMobile }}>
                        <span>Address 2:</span>
                        <span>{address_lines[1]}</span>
                      </InfoSpan>
                    ) : null}
                  </>
                ) : null}
                {timeslots && timeslots[0]
                  ? timeslots.map(
                      ({ id, start_date, end_date, is_full }, index) => (
                        <Fragment key={id}>
                          {timeslots.length > 1 ? (
                            <div>
                              <h4
                                className="condensed"
                                style={{ marginBottom: "0" }}
                              >
                                <span>{`Time Slot ${index + 1}`}</span>
                              </h4>
                            </div>
                          ) : null}
                          <InfoSpan {...{ isMobile }}>
                            <span>Date:</span>
                            <span>{formatDate(start_date, timezone)}</span>
                          </InfoSpan>
                          <InfoSpan key={id} {...{ isMobile }}>
                            <span>
                              {timeslots.length === 1
                                ? "Time:"
                                : `Time Slot ${index + 1}:`}
                            </span>
                            <span>
                              {`${formatTime(start_date, end_date, timezone)}${
                                is_full ? `   *FULL*` : ""
                              }`}
                            </span>
                          </InfoSpan>
                        </Fragment>
                      )
                    )
                  : null}
              </DetailsWrapper>
            </div>
          </RightSection>
        </Content>
      </Container>
    </Lightbox>
  );
};

export default DetailsCard;
