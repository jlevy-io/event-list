import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ isMobile }) => (isMobile ? "100vw" : "calc(70vw - 100px)")};
  height: ${({ isMobile }) => (isMobile ? "100vh" : "calc(90vh - 100px)")};
  background-color: #fff;
  border-radius: ${({ isMobile }) => (isMobile ? "0px" : "32px")};
  overflow-y: auto;
  overflow-x: hidden;
  padding: ${({ isMobile }) => (isMobile ? "10px" : "50px")};

  &::after {
    flex: 0 0 100px;
    content: "";
  }

  & {
    scrollbar-width: auto;
    scrollbar-color: #8f54a0 #ffffff;
  }

  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
    border: 6px solid #fff;
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  padding-right: 10px;
  h1 {
    font-size: ${({ isMobile }) => (isMobile ? "1.25rem" : "2rem")};
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

export const CloseWrapper = styled.div`
  display: flex;
  width: 5%;
  padding-right: ${({ isMobile }) => (isMobile ? "10px" : "0px")};
  justify-content: flex-end;
`;

export const TitleDetails = styled.div`
  display: flex;
  gap: ${({ isMobile }) => (isMobile ? "5px" : "25px")};
  flex-wrap: wrap;
`;

export const InfoSpan = styled.div`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  border-radius: 8px;
  padding: ${({ isMobile }) => (isMobile ? "5px 10px" : "10px 20px")};
  border: 1px solid #ccc;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
  span:first-of-type {
    display: ${({ isMobile }) => (isMobile ? "block" : "inline")};
    height: 100%;
    font-family: "Barlow Condensed";
    font-weight: 700;
    margin-right: 10px;
    word-break: keep-all;
  }
  span:last-of-type {
    display: ${({ isMobile }) => (isMobile ? "block" : "inline")};
    font-family: "Urbanist";
    font-weight: 400;
    word-break: keep-all;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  gap: 25px;
  width: 100%;
  word-break: break-word;
`;
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 25px;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 25px;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 2px);
  aspect-ratio: ${({ isMobile }) => (isMobile ? "16 / 9" : "2")};
  background-color: #fff;
  border: 1px solid #ccc;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;

export default Container;
