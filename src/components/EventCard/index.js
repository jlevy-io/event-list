import React from "react";
import LazyImage from "components/LazyImage";
import Button from "components/Button";
import Container, {
  FeaturedImage,
  CardWrapper,
  CardBody,
  DateTime,
  EventTitle,
  EventDescription,
  ButtonRow,
} from "./styles";

const EventCard = ({
  isMobile,
  title,
  summary,
  description,
  featured_image_url,
  imageWidth,
  timeslots,
}) => {
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
              <span className="clamp">{description}</span>
            </p>
          </EventDescription>
          {/* summary !== description && <p>{description}</p> */}
        </CardBody>
        <ButtonRow>
          <Button>See Details</Button>
        </ButtonRow>
      </CardWrapper>
    </Container>
  );
};

export default EventCard;
