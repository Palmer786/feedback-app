import React, { useState, useEffect } from "react";
import { isLoaded, useFirebase } from "react-redux-firebase";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import defaultAvatar from "../../images/user-image.png";
import SingleSkillRating from "../SingleSkillRating";
import Loading from "../Loading";
import AvatarLoadingSpinner from "../AvatarLoadingSpinner";

import {
  UserAvatar,
  UserAvatarContainer,
  UserContainer,
  UserInfoContainer,
  UserTitle,
  PersonalSkillsContainer,
  PersonalSkillsHeader,
  FeedbackHeader,
  UserName,
  MainContainer,
  HeaderWrapper,
  Wrapper,
  TextFeedbackHeader,
  TextFeedback,
} from "./styles";

interface IUser {
  proffesion: string;
  avatarUrl: string;
  displayName: string;
}

interface IFeedback {
  [key: string]: number | string;
  userID: string;
  advice: string;
  whatIsWrong: string;
}

const FeedbackDetails = () => {
  const [feedback, setFeedback] = useState<IFeedback>({
    advice: "",
    userID: "",
    whatIsWrong: "",
  });
  const [user, setUser] = useState<IUser>({
    proffesion: "",
    avatarUrl: "",
    displayName: "",
  });
  const firebase = useFirebase();
  const params: { id: string } = useParams();

  const history = useHistory();

  const uid = useSelector((state: ISelector) => state.firebase.auth.uid);

  const { avatarUrl, displayName, proffesion, skills } = useSelector(
    (state: ISelector) => state.firebase.profile
  );

  if (!feedback) history.push("/");

  useEffect(() => {
    isLoaded(uid) &&
      firebase
        .firestore()
        .collection("users")
        .doc(uid)
        .collection("feedback")
        .doc(params.id)
        .get()
        .then((snapshot) => setFeedback(snapshot.data() as IFeedback));
  }, [isLoaded(uid)]);

  useEffect(() => {
    feedback.userID &&
      firebase
        .firestore()
        .collection("users")
        .doc(feedback.userID)
        .get()
        .then((snapshot) => setUser(snapshot.data() as IUser));
  }, [feedback]);

  if (!isLoaded(uid)) return <Loading />;

  return (
    <MainContainer>
      <Wrapper>
        <HeaderWrapper>
          {!isLoaded(skills) ? (
            <Loading />
          ) : (
            <>
              <UserContainer>
                <UserAvatarContainer>
                  {avatarUrl ? (
                    <UserAvatar src={avatarUrl} />
                  ) : (
                    <UserAvatar src={defaultAvatar} />
                  )}
                </UserAvatarContainer>
                <UserInfoContainer>
                  <UserName>{displayName}</UserName>
                  {proffesion && <UserTitle>{proffesion}</UserTitle>}
                </UserInfoContainer>
              </UserContainer>
              {user && !user.displayName ? (
                <AvatarLoadingSpinner />
              ) : (
                <UserContainer>
                  <UserAvatarContainer>
                    {user.avatarUrl ? (
                      <UserAvatar src={user.avatarUrl} />
                    ) : (
                      <UserAvatar src={defaultAvatar} />
                    )}
                  </UserAvatarContainer>
                  <UserInfoContainer>
                    <UserName>{user.displayName}</UserName>
                    {user.proffesion && (
                      <UserTitle>{user.proffesion}</UserTitle>
                    )}
                  </UserInfoContainer>
                </UserContainer>
              )}
            </>
          )}
        </HeaderWrapper>
        <FeedbackHeader>Skills rating</FeedbackHeader>
        <PersonalSkillsHeader>
          Personal skills and competences
        </PersonalSkillsHeader>
        <PersonalSkillsContainer>
          {!isLoaded(skills) ? (
            <Loading />
          ) : (
            skills &&
            skills.map((skill) => (
              <SingleSkillRating
                skill={skill}
                rating={feedback[skill] as number}
              />
            ))
          )}
        </PersonalSkillsContainer>
        {feedback.whatIsWrong && (
          <>
            <TextFeedbackHeader>What is wrong</TextFeedbackHeader>
            <TextFeedback>{feedback.whatIsWrong}</TextFeedback>
          </>
        )}
        {feedback.advice && (
          <>
            <TextFeedbackHeader>What could be improved</TextFeedbackHeader>
            <TextFeedback>{feedback.advice}</TextFeedback>
          </>
        )}
      </Wrapper>
    </MainContainer>
  );
};

export default FeedbackDetails;
