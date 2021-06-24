import styled from "styled-components";
import { device } from "../../constants/device";

export const MenuButtonWrapper = styled.div`
  width: 32px;
  height: 28px;
  cursor: pointer;
  display: none;
  position: absolute;
  top: 10px;
  left: 10px;

  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`;

export const MenuButtonLine = styled.div<{ isMenuOpen: boolean }>`
  width: 100%;
  height: 4px;
  background: ${({ theme }) => theme.color.red};
  border-radius: 5px;

  :nth-child(2) {
    transition: width 0.2s ease 0s;
    width: ${({ isMenuOpen }) => (isMenuOpen ? "70%" : "100%")};
  }

  :nth-child(3) {
    transition: width 0.4s ease 0s;
    width: ${({ isMenuOpen }) => (isMenuOpen ? "40%" : "100%")};
  }
`;
