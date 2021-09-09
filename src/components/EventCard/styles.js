import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 15px;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.5s ease;
  cursor: default;
  ${({ isMobile }) =>
    !isMobile &&
    `&:hover {
    box-shadow: rgba(0, 191, 255, 0.3) 0px 3px 15px;
  }`}
  span.clamp {
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
`;

export const FeaturedImage = styled.div`
  display: flex;
  justify-content: center;
  img {
    object-position: center top;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 40px);
  padding: 10px 20px;
`;

export const DateTime = styled.div`
  width: 100%;
  margin-bottom: 5px;
  span {
    font-family: "Quicksand";
    font-size: 12px;
    color: ${({ theme }) => theme.colors.darkText80};
    word-break: ${({ breakAll }) => (breakAll ? "break-all" : "break-word")};
    -webkit-line-clamp: ${({ maxLines }) => maxLines || 1};
  }
`;

export const EventTitle = styled.div`
  width: 100%;
  min-height: 44px;
  margin-bottom: 10px;
  h4 {
    margin: 0;
    span {
      font-size: 17px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.darkText};
      word-break: ${({ breakAll }) => (breakAll ? "break-all" : "break-word")};
      -webkit-line-clamp: ${({ maxLines }) => maxLines || 1};
    }
  }
`;

export const EventDescription = styled.div`
  width: 100%;
  p {
    all: unset;
    span {
      font-family: "Quicksand";
      font-size: 15px;
      color: ${({ theme }) => theme.colors.darkText};
      word-break: ${({ breakAll }) => (breakAll ? "break-all" : "break-word")};
      -webkit-line-clamp: ${({ maxLines }) => maxLines || 1};
    }
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  padding: 0px 20px;
  justify-content: center;
  margin-bottom: 15px;
`;

export const NextIcon = styled.div`
  position: absolute;
  top: 0px;
  right: 1rem;
  img {
    height: 12px;
    width: auto;
    filter: ${({ theme }) => theme.filters.whiteFilter};
  }
`;

export default Container;
