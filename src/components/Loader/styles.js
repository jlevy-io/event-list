import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  text-align: ${({ position }) => (position ? position : "center")};
  width: 100%;
  animation: fadeIn 0.2s cubic-bezier(0, 0.2, 0.8, 1) 1;
  &.full {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 18, 84, 0.3);
    z-index: 999;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    position: absolute;
    border: 4px solid ${({ theme }) => theme.colors.primary};
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
  &.small {
    width: 30px;
    height: 30px;
    div {
      position: absolute;
      border: 4px solid ${({ theme }) => theme.colors.primary};
      opacity: 1;
      border-radius: 50%;
      animation: lds-ripple-small 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    div:nth-child(2) {
      animation-delay: -0.5s;
    }
    @keyframes lds-ripple-small {
      0% {
        top: 15px;
        left: 15px;
        width: 0;
        height: 0;
        opacity: 1;
      }
      100% {
        top: 0px;
        left: 0px;
        width: 30px;
        height: 30px;
        opacity: 0;
      }
    }
  }
`;

export default Loader;
