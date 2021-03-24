import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

import * as routes from "../../constants/routes";
import closeIcon from "../../images/close-icon.png";
import star from "../../images/star.png";
import StyledTextarea from "../StyledTextarea";

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

const UserAvatar = styled.div`
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

const CloseIcon = styled.img`
  width: 40%;
  height: 40%;
  cursor: pointer;
`;

const FeedbackHeader = styled.p`
  color: ${({ theme }) => theme.color.red};
  font-size: 2.4rem;
`;

const PersonalSkillsContainer = styled.div`
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  user-select: none;
`;

const StarIcon = styled.img`
  width: 14%;
  height: 14%;
`;

const WriteFeedbackContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WriteFeedbackHeader = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.black};
`;

const InputWrapper = styled.div`
  width: 100%;
`;

const StyledInput = styled.textarea<{ value: string }>`
  width: 100%;
  height: 60%;
  border: none;
  font-size: 1.6rem;
  border-bottom: ${({ value, theme }) =>
    value.length > 1
      ? `2px solid ${theme.color.red}`
      : `2px solid ${theme.color.lightGray}`};
  padding: 1rem 0;
  color: ${({ theme }) => theme.color.gray};

  :focus {
    border-bottom: 2px solid ${({ theme }) => theme.color.red};
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.color.lightGray};
  }

  overflow-y: auto;
  resize: none;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #424242;
  }

  ::-webkit-scrollbar-thumb {
    background: #9e9e9e;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.color.red};
  }
`;

const StyledLabel = styled.label<{ value: string }>`
  visibility: ${({ value }) => (value.length > 0 ? "visible" : "hidden")};
  color: ${({ theme }) => theme.color.red};
  font-size: 1.2rem;
  text-transform: capitalize;
`;

const StyledButton = styled.button`
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

const UserFeedback: React.FC = () => {
  const [feedback, setFeedback] = useState({
    whatIsWrong: "",
    advice: "",
  });

  const { whatIsWrong, advice } = feedback;

  const history = useHistory();

  const params: { id: string } = useParams();

  useFirestoreConnect([{ collection: "users" }]);

  const users = useSelector((state: ISelector) => {
    return state.firestore.ordered.users;
  });

  const closeUserFeedback = () => history.push(routes.HOMEPAGE);

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") return history.push(routes.HOMEPAGE);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFeedback((prev) => ({ ...prev, [id]: value }));
  };

  const skills = [
    "Leadership skills",
    "English language knowledge",
    "Communication skills",
    "Problem solving",
    "Programming skills",
    "Ability to learning",
  ];

  return (
    <MainContainer onKeyUp={handleKeyUp}>
      <Wrapper>
        <HeaderWrapper>
          <UserContainer>
            <UserAvatarContainer>
              <UserAvatar />
            </UserAvatarContainer>
            <UserInfoContainer>
              <UserName>
                {users &&
                  users
                    .filter((user) => user.id === params.id)
                    .map((user) => user.fullName)}
              </UserName>
              <UserTitle>Senior Software Engineer</UserTitle>
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
          {skills.map((skill) => (
            <SingleSkillContainer>
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
