import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  @media only screen and (max-width: 414px) {
    width: 100vw;
  }
`;

export default Container;
