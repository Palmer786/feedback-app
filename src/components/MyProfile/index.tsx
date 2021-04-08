import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import * as routes from "../../constants/routes";
import settingsIcon from "../../images/settings-icon.png";
import star from "../../images/star.png";
import userAvatar from "../../images/user-image.png";
import { basicSkills } from "../../constants/basicSkills";

const MainContainer = styled.div`
  min-height: 840px;
  height: 100vh;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  height: 94%;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const UserContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const UserAvatarContainer = styled.div`
  height: 86px;
  width: 86px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserAvatar = styled.img`
  height: 80%;
  width: 80%;
  border-radius: 50%;
  background: white;
  border: 1px solid ${({ theme }) => theme.color.black};
`;

const UserInfoContainer = styled.div`
  width: 66%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const UserName = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.color.black};
  margin: 0;
  font-weight: 500;
`;

const UserTitle = styled.p`
  font-size: 1.4rem;
  color: #7a7e81;
  margin: 0;
`;

const IconContainer = styled.div`
  height: 100%;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SettingsIcon = styled.img`
  width: 70%;
  height: 70%;
  cursor: pointer;
`;

const FeedbackHeader = styled.p`
  color: ${({ theme }) => theme.color.red};
  font-size: 2.4rem;
`;

const PersonalSkillsContainer = styled.div`
  width: 100%;
  height: 80%;
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

const PersonalSkillsHeader = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: 1.6rem;
`;

const SingleSkillContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SingleSkillName = styled.p`
  color: #7a7e81;
  font-size: 1.4rem;
`;

const StarsContainer = styled.div`
  width: 26%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  user-select: none;
`;

const StarIcon = styled.img`
  width: 14%;
  height: 42%;
`;

const UserFeedback: React.FC = () => {
  useFirestoreConnect([{ collection: "users" }]);

  const { skills, displayName, avatarUrl, proffesion } = useSelector(
    (state: ISelector) => state.firebase.profile
  );

  const history = useHistory();

  const goToSettings = () => history.push(routes.PROFILE_SETTINGS);

  return (
    <MainContainer>
      <Wrapper>
        <HeaderWrapper>
          <UserContainer>
            <UserAvatarContainer>
              {avatarUrl ? (
                <UserAvatar src={avatarUrl} />
              ) : (
                <UserAvatar src={userAvatar} />
              )}
            </UserAvatarContainer>
            <UserInfoContainer>
              <UserName>{displayName}</UserName>
              {proffesion && <UserTitle>{proffesion}</UserTitle>}
            </UserInfoContainer>
          </UserContainer>
          <IconContainer>
            <SettingsIcon
              src={settingsIcon}
              alt="settings"
              onClick={() => goToSettings()}
            />
          </IconContainer>
        </HeaderWrapper>
        <FeedbackHeader>My feedback</FeedbackHeader>
        <PersonalSkillsHeader>
          Personal skills and competences
        </PersonalSkillsHeader>
        <PersonalSkillsContainer>
          {basicSkills.map((skill) => (
            <SingleSkillContainer key={skill}>
              <SingleSkillName>{skill}</SingleSkillName>
              <StarsContainer>
                <StarIcon src={star} alt="star" />
                <StarIcon src={star} alt="star" />
                <StarIcon src={star} alt="star" />
                <StarIcon src={star} alt="star" />
                <StarIcon src={star} alt="star" />
              </StarsContainer>
            </SingleSkillContainer>
          ))}
          {skills &&
            skills.map((skill) => (
              <SingleSkillContainer key={skill}>
                <SingleSkillName>{skill}</SingleSkillName>
                <StarsContainer>
                  <StarIcon src={star} alt="star" />
                  <StarIcon src={star} alt="star" />
                  <StarIcon src={star} alt="star" />
                  <StarIcon src={star} alt="star" />
                  <StarIcon src={star} alt="star" />
                </StarsContainer>
              </SingleSkillContainer>
            ))}
        </PersonalSkillsContainer>
      </Wrapper>
    </MainContainer>
  );
};

export default UserFeedback;
