import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 75%;
  min-height: 840px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentBox = styled.div`
  height: 58%;
  width: 60%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h1`
  font-weight: 300;
  color: ${({ theme }) => theme.color.gray};
  font-size: 4.8rem;
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
`;

export const StyledLink = styled(Link)`
  font-weight: 500;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.gray};
  text-decoration: none;

  :hover {
    text-decoration: underline;
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
`;
