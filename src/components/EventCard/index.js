import React, { lazy, Suspense, useState } from "react";
import { Button } from "@material-ui/core";
import LazyImage from "components/LazyImage";
import Loader from "components/Loader";
import NextSVG from "assets/next.svg";
import theme from "containers/Theme/Variables";
import Container, {
  FeaturedImage,
  CardWrapper,
  CardBody,
  DateTime,
  EventTitle,
  EventDescription,
  ButtonRow,
  NextIcon,
} from "./styles";
import Lightbox from "components/Lightbox";

const DetailsCard = lazy(() => import("components/DetailsCard"));

const EventCard = ({
  id,
  isMobile,
  title,
  description,
  featured_image_url,
  imageWidth,
  timeslots,
  details,
}) => {
  const [modal, showModal] = useState(false);

  const formatDate = (value) =>
    new Date(value * 1000).toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });

  const formatTime = (value) =>
    new Date(value * 1000).toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    });

  const endIcon = () => (
    <NextIcon>
      <img src={NextSVG} alt="Next icon" />
    </NextIcon>
  );

  const cleanMarkup = (value) => value.replace(/\*/g, "").replace(/#/g, "");

  return (
    <Container {...{ isMobile }}>
      <FeaturedImage>
        <LazyImage
          url={featured_image_url}
          imageWidth={imageWidth}
          imageHeight={imageWidth / 2}
          aspectRatio={2}
        />
      </FeaturedImage>
      <CardWrapper>
        <CardBody>
          <DateTime>
            {timeslots && timeslots[0] ? (
              <span>{`${formatDate(timeslots[0].start_date)} @ ${formatTime(
                timeslots[0].start_date
              )}`}</span>
            ) : (
              <span>No date info given</span>
            )}
          </DateTime>
          <EventTitle maxLines={2}>
            <h4>
              <span className="clamp">{title}</span>
            </h4>
          </EventTitle>
          <EventDescription maxLines={5}>
            <p>
              <span className="clamp">{cleanMarkup(description)}</span>
            </p>
          </EventDescription>
          {/* summary !== description && <p>{description}</p> */}
        </CardBody>
        <ButtonRow>
          <Button
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.buttonText,
            }}
            color="primary"
            variant="contained"
            disableElevation
            fullWidth
            endIcon={endIcon()}
            onClick={() => showModal(true)}
          >
            See Details
          </Button>
        </ButtonRow>
      </CardWrapper>
      {modal && (
        <Suspense
          fallback={
            <Lightbox>
              <Loader full />
            </Lightbox>
          }
        >
          <DetailsCard
            isOpen={modal}
            onClose={() => showModal(false)}
            {...{
              id,
              isMobile,
              title,
              description,
              featured_image_url,
              imageWidth,
              timeslots,
              details,
            }}
          />
        </Suspense>
      )}
    </Container>
  );
};

export default EventCard;
