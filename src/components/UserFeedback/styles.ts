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

  @media ${device.mobileL} {
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

export const UserContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${device.mobileL} {
    margin-top: 20px;
  }
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

  @media ${device.mobileL} {
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
    margin-top: 5px;
  }
`;

export const CloseIcon = styled.img`
  width: 60%;
  height: 60%;
  cursor: pointer;
`;

export const FeedbackHeader = styled.p`
  color: ${({ theme }) => theme.color.red};
  font-size: 2.4rem;
`;

export const PersonalSkillsContainer = styled.div`
  width: 100%;
  max-height: 50%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

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

export const PersonalSkillsHeader = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: 1.6rem;
`;

export const WriteFeedbackContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WriteFeedbackHeader = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.black};
`;

export const StyledButton = styled.button`
  height: 40px;
  width: 20%;
  color: white;
  border: none;
  border-radius: 4px;
  background: ${({ theme }) => theme.color.red};
  cursor: pointer;
  font-size: 1.6rem;
  align-self: flex-end;

  @media ${device.mobileL} {
    width: 30%;
  }

  @media ${device.mobileM} {
    width: 35%;
  }

  @media ${device.mobileS} {
    width: 40%;
  }
`;
