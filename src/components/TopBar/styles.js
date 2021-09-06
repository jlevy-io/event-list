import styled from "styled-components";

const Container = styled.header`
  display: flex;
  width: calc(100% - 50px);
  min-height: 10vh;
  align-items: center;
  padding: 0px 25px;
  border-bottom: 1px solid #ccc;
  h1 {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Container;
