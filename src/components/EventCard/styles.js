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
  cursor: pointer;
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
    font-size: 13px;
    color: ${({ theme }) => theme.colors.darkText80};
    word-break: ${({ breakAll }) => (breakAll ? "break-all" : "break-word")};
    -webkit-line-clamp: ${({ maxLines }) => maxLines || 1};
  }
`;

export const EventTitle = styled.div`
  width: 100%;
  min-height: 44px;
  margin-bottom: 5px;
  h4 {
    all: unset;
    span {
      font-size: 16px;
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
      font-size: 14px;
      color: ${({ theme }) => theme.colors.darkText};
      word-break: ${({ breakAll }) => (breakAll ? "break-all" : "break-word")};
      -webkit-line-clamp: ${({ maxLines }) => maxLines || 1};
    }
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

export default Container;
