import styled from "styled-components";

export const StyledButton = styled.button`
  font-weight: 500;
  box-shadow: none;
  background-color: ${({ theme, secondary }) =>
    secondary ? "#fff" : theme.colors.primary};
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.primary : theme.colors.buttonText};
  border-radius: 100px;
  padding: 12px 25px;
  outline: none;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  transition: ease all 0.3s;
  &.small {
    padding: 6px 10px;
  }
  &.danger {
    background-color: ${({ theme }) => theme.colors.danger};
    border-color: ${({ theme }) => theme.colors.danger};
    &:hover {
      background-color: ${({ theme }) => theme.colors.dangerHover};
      border-color: ${({ theme }) => theme.colors.dangerHover};
    }
  }
  &.secondary {
    background-color: transparent;
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};
      color: #fff;
    }
  }
  &:hover {
    background-color: ${({ theme, secondary }) =>
      secondary ? "#f9f9f9" : theme.colors.primaryHover};
    border-color: ${({ theme, secondary }) =>
      secondary ? theme.colors.primary : theme.colors.primaryHover};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabledButtonBg};
    color: ${({ theme }) => theme.colors.disabledButtonText};
    border-color: ${({ theme }) => theme.colors.disabledButtonBg};
  }
`;
