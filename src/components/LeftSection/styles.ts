import { Link } from "react-router-dom";
import styled from "styled-components";

import { device } from "../../constants/device";

export const Wrapper = styled.div<{ isMenuOpen: boolean }>`
  width: 25%;
  min-height: 840px;
  height: 100vh;
  background: #22282d;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptopL} {
    width: 30%;
  }

  @media ${device.laptop} {
    width: 35%;
  }

  @media ${device.tablet} {
    display: ${({ isMenuOpen }) => (isMenuOpen ? "block-inline" : "none")};
    width: 100%;
    position: absolute;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 65%;
  height: 160px;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.img`
  height: 64px;
  user-select: none;
  cursor: pointer;
`;

export const ProfileInfoWrapper = styled.div`
  height: 80px;
  min-width: 65%;
  display: flex;
  flex-direction: row;

  @media ${device.laptopL} {
    max-width: 280px;
  }

  @media ${device.laptop} {
    max-width: 210px;
  }

  @media ${device.mobileL} {
    min-width: 75%;
  }

  @media ${device.mobileM} {
    min-width: 80%;
  }

  @media ${device.mobileS} {
    min-width: 90%;
  }
`;

export const AvatarContainer = styled.div`
  height: 100%;
  width: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  background: white;
  width: 75%;
  height: 75%;

  @media ${device.laptop} {
    width: 80%;
  }
`;

export const ProfileInfoContainer = styled.div`
  width: 74.3%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const FullNameP = styled(Link)`
  width: 150px;
  color: white;
  font-size: 1.6rem;
  margin: 0;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.color.red};
  }

  @media ${device.laptop} {
    width: 100px;
  }

  @media ${device.tablet} {
    width: 150px;
  }
`;

export const LogOutP = styled.p`
  width: 50px;
  color: white;
  margin: 0;
  font-size: 1.2rem;
  cursor: pointer;

  :hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.color.lightGray};
  }
`;

export const AccountOptions = styled.div`
  display: flex;
`;

export const StyledLink = styled(Link)`
  color: white;
  font-size: 1.6rem;
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.color.lightGray};
  }
`;

export const StyledSpan = styled.span`
  color: whitesmoke;
  font-size: 1.6rem;
  width: 24px;
  text-align: center;
`;
