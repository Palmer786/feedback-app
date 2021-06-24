import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../../../constants/device";

export const UserContainer = styled.div`
  width: 96%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 6px 0;

  &:hover {
    background: whitesmoke;
  }
`;

export const UserAvatarContainer = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const UserAvatar = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background: white;
  border: 1px solid ${({ theme }) => theme.color.black};
`;

export const UserInfoContainer = styled.div`
  width: 66%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const UserName = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.black};
  margin: 0;
  font-weight: 500;

  @media ${device.mobileL} {
    font-size: 1.2rem;
  }

  @media ${device.mobileS} {
    font-size: 1.4rem;
  }
`;

export const UserTitle = styled.p`
  font-size: 1.2rem;
  color: #7a7e81;
  margin: 0;

  @media ${device.mobileL} {
    font-size: 1.1rem;
  }

  @media ${device.mobileS} {
    font-size: 1.2rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
