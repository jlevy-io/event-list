import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ buttonSize }) => buttonSize}px;
  height: ${({ buttonSize }) => buttonSize}px;
  cursor: pointer;

  &:hover .leftright {
    transform: rotate(-45deg);
    background-color: ${({ theme }) => theme.colors.primary};
  }
  &:hover .rightleft {
    transform: rotate(45deg);
    background-color: ${({ theme }) => theme.colors.primary};
  }
  &:hover label {
    opacity: 1;
  }

  .leftright {
    height: 2px;
    width: ${({ buttonSize }) => buttonSize}px;
    position: absolute;
    margin-top: ${({ buttonSize }) => buttonSize / 2}px;
    background-color: ${({ buttonColor }) => buttonColor};
    border-radius: 2px;
    transform: rotate(45deg);
    transition: all 0.3s ease-in;
  }

  .rightleft {
    height: 2px;
    width: ${({ buttonSize }) => buttonSize}px;
    position: absolute;
    margin-top: ${({ buttonSize }) => buttonSize / 2}px;
    background-color: ${({ buttonColor }) => buttonColor};
    border-radius: 2px;
    transform: rotate(-45deg);
    transition: all 0.3s ease-in;
  }

  label {
    position: absolute;
    bottom: -${({ buttonSize }) => buttonSize / 2}px;
    left: 0;
    width: ${({ buttonSize }) => buttonSize}px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.3s ease-in;
    opacity: 0;
    padding-left: 2px;
  }
`;

export default Container;
