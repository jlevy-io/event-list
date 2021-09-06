import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  align-items: center;
`;

export const View = styled.main`
  display: flex;
  width: 100%;
  min-height: 90vh;
  background-color: #fafafa;
  justify-content: center;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60vh;
  justify-content: center;
  align-items: center;
`;

export default Container;
