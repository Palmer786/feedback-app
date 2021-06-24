import styled from "styled-components";
import { device } from "../../constants/device";

export const MainContainer = styled.div`
  min-height: 840px;
  height: 100vh;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  height: 94%;
  width: 50%;
  display: flex;
  flex-direction: column;

  @media ${device.laptopL} {
    width: 65%;
  }

  @media ${device.laptop} {
    width: 80%;
  }

  @media ${device.tablet} {
    width: 90%;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledButton = styled.button`
  height: 34px;
  width: 16%;
  color: white;
  border: none;
  border-radius: 4px;
  background: ${({ theme }) => theme.color.red};
  cursor: pointer;
  font-size: 1.6rem;
  align-self: flex-end;

  :hover {
    background: ${({ theme }) => theme.color.lightRed};
    transition: 0.1s background;
  }
  
  @media ${device.mobileL} {
    font-size: 1.4rem;
  }

  @media ${device.mobileM} {
   width: 20%;
  }

  @media ${device.mobileS} {
    width: 25%;
  }
`;

export const UserContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserAvatarContainer = styled.div`
  height: 86px;
  width: 86px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6px;

  @media ${device.laptopL} {
    width: 72px;
    height: 72px;
  }

  @media ${device.laptop} {
    width: 64px;
    height: 64px;
  }
`;

export const UserAvatar = styled.img`
  height: 80%;
  width: 80%;
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
  font-size: 2rem;
  color: ${({ theme }) => theme.color.black};
  margin: 0;
  font-weight: 500;

  @media ${device.laptopL} {
    font-size: 1.8rem;
  }

  @media ${device.laptop} {
    font-size: 1.6rem;
  }
`;

export const UserTitle = styled.p`
  font-size: 1.4rem;
  color: #7a7e81;
  margin: 0;

  @media ${device.laptopL} {
    font-size: 1.3rem;
  }

  @media ${device.laptop} {
    font-size: 1.2rem;
  }
`;

export const IconContainer = styled.div`
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.laptopL} {
    width: 72px;
    height: 72px;
  }

  @media ${device.mobileL} {
    width: 60px;
    height: 60px;
  }
`;

export const BackIcon = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const StyledH4 = styled.h4`
  color: ${({ theme }) => theme.color.red};
  font-size: 2rem;
  margin: 5rem 0;
`;

export const InputWithButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const StyledFileInput = styled.input`
  font-size: 1.4rem;
  width: 80%;

  &::-webkit-file-upload-button {
    height: 40px;
    width: 20%;
    color: white;
    border: none;
    border-radius: 4px;
    background: ${({ theme }) => theme.color.red};
    cursor: pointer;
    font-size: 1.6rem;

    :hover {
      background: ${({ theme }) => theme.color.lightRed};
      transition: 0.1s background;
    }

    @media ${device.laptop} {
      width: 30%;
    }

    @media ${device.mobileL} {
      font-size: 1.4rem;
      width: 35%;
    }
    
    @media ${device.mobileS} {
      font-size: 1.3rem;
      width: 40%;
    }
  }
`;

export const SkillsContainer = styled.div`
  width: 100%;
  height: 12%;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background: whitesmoke;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.lightGray};
  }
`;

export const SingleSkillContainer = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px dashed ${({ theme }) => theme.color.red};
  border-radius: 8px;
  margin: 5px 1rem;
`;

export const SingleSkillTitle = styled.p`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.color.red};
  font-weight: 500;
  margin: 0 1rem;

  @media ${device.mobileL} {
    font-size: 1.4rem;
  }
`;

export const SingleSkillImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  cursor: pointer;
  margin-right: 5px;
`;
