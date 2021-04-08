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

import {
  UserAvatar,
  UserAvatarContainer,
  UserContainer,
  IconContainer,
  UserName,
  Wrapper,
  HeaderWrapper,
  MainContainer,
  FeedbackHeader,
  PersonalSkillsContainer,
  PersonalSkillsHeader,
  SingleSkillContainer,
  SingleSkillName,
  StarIcon,
  StarsContainer,
  UserInfoContainer,
  SettingsIcon,
  UserTitle,
} from "./styles";

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
