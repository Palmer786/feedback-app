import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  isLoaded,
  useFirebase,
  useFirestoreConnect,
} from "react-redux-firebase";
import { useHistory, useParams } from "react-router-dom";

import * as routes from "../../constants/routes";
import closeIcon from "../../images/close-icon.png";
import userAvatar from "../../images/user-image.png";
import StyledTextarea from "../StyledTextarea";
import SingleSkill from "../SingleSkill";
import { showNotification } from "../../constants/notification";
import Loading from "../Loading";
import AvatarLoadingSpinner from "../AvatarLoadingSpinner";

import {
  Wrapper,
  HeaderWrapper,
  StyledButton,
  UserName,
  UserAvatar,
  UserAvatarContainer,
  UserContainer,
  MainContainer,
  IconContainer,
  UserInfoContainer,
  UserTitle,
  PersonalSkillsContainer,
  PersonalSkillsHeader,
  FeedbackHeader,
  WriteFeedbackHeader,
  WriteFeedbackContainer,
  CloseIcon,
} from "./styles";

interface ISelectedUser {
  displayName: string;
  avatarUrl: string;
  skills: string[];
  proffesion: string;
}

const UserFeedback: React.FC = () => {
  const [comments, setComments] = useState({
    whatIsWrong: "",
    advice: "",
  });

  const [selectedUser, setSelectedUser] = useState<ISelectedUser>({
    displayName: "",
    avatarUrl: "",
    skills: [],
    proffesion: "",
  });

  const [skillsRating, setSkillsRating] = useState({});

  const [isDocExists, setDocExists] = useState(false);

  const handleSkillsRating = (skill: string, value: number) =>
    setSkillsRating((prev: any) => ({ ...prev, [skill]: value }));

  const { whatIsWrong, advice } = comments;

  const history = useHistory();

  const firebase = useFirebase();

  const params: { id: string } = useParams();

  useFirestoreConnect([{ collection: "users" }]);

  const users = useSelector((state: ISelector) => {
    return state.firestore.ordered.users;
  });

  const ratedUsers = useSelector((state: ISelector) => {
    return state.firebase.profile.ratedUsers;
  });

  const currentUserUID = useSelector((state: ISelector) => {
    return state.firebase.auth.uid;
  });

  useEffect(() => {
    if (users) {
      setSelectedUser(
        users.filter((user) => user.id === params.id).map((user) => user)[0]
      );
    }
  }, [users, params]);

  const feedbackCollectionRef = firebase
    .firestore()
    .collection("users")
    .doc(params.id)
    .collection("feedback");

  useEffect(() => {
    if (!ratedUsers) return;
    const isDocExists = ratedUsers.filter((userID) => userID === params.id);

    if (isDocExists.length > 0) {
      return setDocExists(true);
    } else {
      return setDocExists(false);
    }
  }, [params, ratedUsers]);

  useEffect(() => {
    setComments({ whatIsWrong: "", advice: "" });
    setSkillsRating({});
  }, [params]);

  const closeUserFeedback = () => history.push(routes.HOMEPAGE);

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") return history.push(routes.HOMEPAGE);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setComments((prev) => ({ ...prev, [id]: value }));
  };

  const submitFeedback = () => {
    if (Object.keys(skillsRating).length === 0) {
      return showNotification(
        "Empty feedback.",
        "Evaluate the teammate's skill.",
        "warning"
      );
    }
    if (isDocExists) {
      feedbackCollectionRef
        .where("userID", "==", currentUserUID)
        .get()
        .then((snapshot) =>
          snapshot.forEach((doc) =>
            doc.ref.update({
              userID: currentUserUID,
              ...comments,
              ...skillsRating,
            })
          )
        );
      history.push(routes.FEEDBACK_ACCEPTED);
      showNotification(
        "Success!",
        "Your feedback has been updated.",
        "success"
      );
    } else {
      feedbackCollectionRef.add({
        userID: currentUserUID,
        ...comments,
        ...skillsRating,
      });
      firebase.updateProfile({
        ratedUsers: !ratedUsers ? [params.id] : [...ratedUsers, params.id],
      });
      history.push(routes.FEEDBACK_ACCEPTED);
      showNotification("Success!", "Your feedback has been sent.", "success");
    }
  };

  return (
    <MainContainer onKeyUp={handleKeyUp}>
      <Wrapper>
        <HeaderWrapper>
          {selectedUser && (
            <UserContainer>
              <UserAvatarContainer>
                {selectedUser.skills.length === 0 ? (
                  <AvatarLoadingSpinner />
                ) : selectedUser.avatarUrl ? (
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
          )}
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
          {selectedUser.skills.length === 0 ? (
            <Loading />
          ) : (
            selectedUser.skills.map((skill) => (
              <SingleSkill
                key={skill}
                skill={skill}
                handleSkillRating={handleSkillsRating}
              />
            ))
          )}
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
          <StyledButton onClick={() => submitFeedback()}>
            {isDocExists ? "Update" : "Submit"}
          </StyledButton>
        </WriteFeedbackContainer>
      </Wrapper>
    </MainContainer>
  );
};

export default UserFeedback;
