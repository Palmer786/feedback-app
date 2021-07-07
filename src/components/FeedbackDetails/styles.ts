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
  align-items: center;

  @media ${device.mobileL} {
    flex-direction: column;
    align-items: flex-start;
    height: 150px;
    margin-top: 20px;
  }
`;

export const StyledH1 = styled.h1`
  font-size: 2.8rem;
  color: ${({ theme }) => theme.color.black};
`;

export const UserContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:nth-child(2) {
    justify-content: flex-end;

    @media ${device.mobileL} {
      justify-content: flex-start;
    }
  }

  @media ${device.mobileL} {
    width: 80%;
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

export const FeedbackHeader = styled.p`
  color: ${({ theme }) => theme.color.red};
  font-size: 2.4rem;
`;

export const PersonalSkillsContainer = styled.div`
  width: 100%;
  max-height: 55%;
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

export const TextFeedbackHeader = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.red};
  margin: 3rem 0;
`;

export const TextFeedback = styled.p`
  margin: 0;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.color.gray};
`;
