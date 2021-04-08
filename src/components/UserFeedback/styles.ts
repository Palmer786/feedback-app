import styled from "styled-components";

export const MainContainer = styled.div`
  min-height: 840px;
  height: 100vh;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  height: 94%;
  width: 50%;
  display: flex;
  flex-direction: column;
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
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserAvatarContainer = styled.div`
  height: 86px;
  width: 86px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

export const UserTitle = styled.p`
  font-size: 1.4rem;
  color: #7a7e81;
  margin: 0;
`;

export const IconContainer = styled.div`
  height: 100%;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseIcon = styled.img`
  width: 40%;
  height: 40%;
  cursor: pointer;
`;

export const FeedbackHeader = styled.p`
  color: ${({ theme }) => theme.color.red};
  font-size: 2.4rem;
`;

export const PersonalSkillsContainer = styled.div`
  width: 100%;
  height: 50%;
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

export const SingleSkillContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SingleSkillName = styled.p`
  color: #7a7e81;
  font-size: 1.4rem;
`;

export const StarsContainer = styled.div`
  width: 26%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  user-select: none;
`;

export const StarIcon = styled.img`
  width: 14%;
  height: 42%;
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
`;
