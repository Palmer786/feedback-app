import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../constants/device";

export const Wrapper = styled.div`
  width: 75%;
  min-height: 840px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.mobileL} {
    min-height: auto;
  }
`;

export const ContentBox = styled.div`
  height: 58%;
  width: 60%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  @media ${device.laptopL} {
    width: 80%;
  }

  @media ${device.laptop} {
    width: 100%;
  }
`;

export const Header = styled.h1`
  font-weight: 300;
  color: ${({ theme }) => theme.color.gray};
  font-size: 4.8rem;

  @media ${device.laptop} {
    font-size: 4rem;
    text-align: center;
  }

  @media ${device.mobileS} {
    font-size: 3.6rem;
  }
`;

export const ShortInputWrapper = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const LinkBox = styled.div`
  width: 80%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;

  @media ${device.mobileL} {
    width: 90%;
  }
`;

export const StyledLink = styled(Link)`
  font-weight: 500;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.gray};
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }

  @media ${device.laptop} {
    font-size: 1.2rem;
  }
`;

export const PrimaryButton = styled.button`
  height: 60%;
  width: 35%;
  border-radius: 4px;
  background: ${({ theme }) => theme.color.red};
  font-size: 1.4rem;
  font-weight: 500;
  color: white;
  border: none;
  cursor: pointer;
  transition: 0.1s background;

  :hover {
    background: ${({ theme }) => theme.color.lightRed};
    transition: 0.1s background;
  }

  @media ${device.laptop} {
    height: 50px;
    width: 32%;
    font-size: 1.2rem;
  }

  @media ${device.mobileL} {
    height: 42px;
    width: 44%;
  }

  @media ${device.mobileS} {
    width: 48%;
  }
`;
