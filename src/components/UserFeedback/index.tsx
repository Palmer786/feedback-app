import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isLoaded, useFirestoreConnect } from "react-redux-firebase";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

import * as routes from "../../constants/routes";
import closeIcon from "../../images/close-icon.png";
import star from "../../images/star.png";
import userAvatar from "../../images/user-image.png";
import StyledTextarea from "../StyledTextarea";
import { basicSkills } from "../../constants/basicSkills";

import {
  Wrapper,
  HeaderWrapper,
  StyledButton,
  UserName,
  UserAvatar,
  UserAvatarContainer,
  UserContainer,
  SingleSkillContainer,
  MainContainer,
  IconContainer,
  UserInfoContainer,
  UserTitle,
  StarsContainer,
  SingleSkillName,
  StarIcon,
  PersonalSkillsContainer,
  PersonalSkillsHeader,
  FeedbackHeader,
  WriteFeedbackHeader,
  WriteFeedbackContainer,
  CloseIcon,
} from "./styles";

const UserFeedback: React.FC = () => {
  const [feedback, setFeedback] = useState({
    whatIsWrong: "",
    advice: "",
  });

  const [selectedUser, setSelectedUser] = useState<{
    displayName: string;
    avatarUrl: string;
    skills: string[];
    proffesion: string;
  }>({
    displayName: "",
    avatarUrl: "",
    skills: [],
    proffesion: "",
  });

  const { whatIsWrong, advice } = feedback;

  const history = useHistory();

  const params: { id: string } = useParams();

  useFirestoreConnect([{ collection: "users" }]);

  const users = useSelector((state: ISelector) => {
    return state.firestore.ordered.users;
  });

  useEffect(() => {
    if (users) {
      setSelectedUser(
        users.filter((user) => user.id === params.id).map((user) => user)[0]
      );
    }
  }, [users, params]);

  const closeUserFeedback = () => history.push(routes.HOMEPAGE);

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") return history.push(routes.HOMEPAGE);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFeedback((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <MainContainer onKeyUp={handleKeyUp}>
      <Wrapper>
        <HeaderWrapper>
          <UserContainer>
            <UserAvatarContainer>
              {selectedUser.avatarUrl && isLoaded() ? (
                <UserAvatar src={selectedUser.avatarUrl} />
              ) : (
                <UserAvatar src={userAvatar} />
              )}
            </UserAvatarContainer>
            <UserInfoContainer>
              <UserName>{selectedUser.displayName}</UserName>
              {selectedUser.proffesion && (
                <UserTitle>{selectedUser.proffesion}</UserTitle>
              )}
            </UserInfoContainer>
          </UserContainer>
          <IconContainer>
            <CloseIcon
              src={closeIcon}
              alt="close"
              onClick={() => closeUserFeedback()}
            />
          </IconContainer>
        </HeaderWrapper>
        <FeedbackHeader>Provide feedback</FeedbackHeader>
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
          {selectedUser.skills &&
            selectedUser.skills.map((skill) => (
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
        <WriteFeedbackContainer>
          <WriteFeedbackHeader>Write a feedback</WriteFeedbackHeader>
          <StyledTextarea
            value={whatIsWrong}
            placeholder="What is wrong"
            id="whatIsWrong"
            onChange={handleChange}
          />
          <StyledTextarea
            value={advice}
            placeholder="What could be improved"
            id="advice"
            onChange={handleChange}
          />
          <StyledButton>Submit</StyledButton>
        </WriteFeedbackContainer>
      </Wrapper>
    </MainContainer>
  );
};

export default UserFeedback;
