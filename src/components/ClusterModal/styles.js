import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  display: flex;
  ${({ isMobile }) => (isMobile ? "flex: 1;" : "")}
  flex-direction: column;
  width: ${({ isMobile }) => (isMobile ? "100vw" : "80vw")};
  ${({ isMobile }) => (isMobile ? "" : "min-width: 600px;")}
  height: ${({ isMobile }) => (isMobile ? "100vh" : "90vh")};
  background-color: #fff;
  border-radius: ${({ isMobile }) => (isMobile ? "0px" : "32px")};
  overflow: hidden;

  ${({ isMobile }) =>
    isMobile
      ? `&::after {
    flex: 0 0 200px;
    content: "";
  }`
      : ""}

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

export const CloseWrapper = styled.div`
  position: fixed;
  top: 5vh;
  right: 5vw;
`;

export default Container;
