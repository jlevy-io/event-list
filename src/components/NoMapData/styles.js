import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ containerWidth }) =>
    containerWidth ? `${containerWidth}px` : "100%"};
  height: ${({ containerHeight }) =>
    containerHeight ? `${containerHeight}px` : "100%"};

  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(248, 248, 248, 1) 100%
  );
  border: 1px solid #ccc;
`;

export const IconWrapper = styled.div`
  display: flex;
  img {
    filter: ${({ theme }) => theme.filters.dangerFilter};
    width: 50px;
    height: auto;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
`;

export default Container;
