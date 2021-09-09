import styled from "styled-components";

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  min-height: 5vh;
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
  width: 80vw;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 2.5vh;
    width: auto;
    filter: ${({ theme }) => theme.filters.primaryFilter};
    object-fit: contain;
    margin-right: 10px;
  }
`;

export default Container;
