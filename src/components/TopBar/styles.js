import styled from "styled-components";

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  min-height: 8vh;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  z-index: 10;
  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 3vh;
    margin: 0;
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  width: ${({ isMobile }) => (isMobile ? "96vw" : "80vw")};
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 25px;
    width: auto;
    filter: ${({ theme }) => theme.filters.primaryFilter};
    object-fit: contain;
    margin-right: ${({ isMobile }) => (isMobile ? "5px" : "10px")};
  }
`;

export const Controls = styled.div`
  display: flex;
  gap: 25px;
  justify-content: flex-end;
  padding-right: 25px;
`;

export default Container;
