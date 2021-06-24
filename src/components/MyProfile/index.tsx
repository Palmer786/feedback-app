import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useFirebase, useFirestoreConnect } from "react-redux-firebase";
import { useHistory } from "react-router-dom";

import * as routes from "../../constants/routes";
import settingsIcon from "../../images/settings-icon.png";
import userAvatar from "../../images/user-image.png";
import AvatarLoadingSpinner from "../AvatarLoadingSpinner";
import Loading from "../Loading";
import SingleSkillRating from "../SingleSkillRating";
import MyFeedback from "./MyFeedback";

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
  UserInfoContainer,
  SettingsIcon,
  UserTitle,
} from "./styles";

interface ITotalRating {
  [key: string]: number;
}

interface IFeedbackDocs {
  [key: string]: number;
}

const UserFeedback: React.FC = () => {
  const [isLoading, setLoading] = useState(true);

  useFirestoreConnect([{ collection: "users" }]);

  const [feedbackDocs, setFeedbackDocs] = useState<IFeedbackDocs[]>([]);

  const [totalRating, setTotalRating] = useState<ITotalRating>({});

  const firebase = useFirebase();

  const uid = useSelector((state: ISelector) => state.firebase.auth.uid);

  const { skills, displayName, avatarUrl, proffesion, isLoaded } = useSelector(
    (state: ISelector) => state.firebase.profile
  );

  const feedback = useSelector(
    (state: ISelector) => state.firestore.ordered.feedback
  );

  const history = useHistory();

  const goToSettings = () => history.push(routes.PROFILE_SETTINGS);

  const getAverageRating = (obj: { [key: string]: number }) => {
    let averageRating = {};

    for (const property in obj) {
      averageRating = {
        ...averageRating,
        [property]: (
          obj[property] /
          feedbackDocs.reduce((acc, doc) => {
            if (doc.hasOwnProperty(property)) {
              return (acc = acc + 1);
            }
            return acc;
          }, 0)
        ).toFixed(1),
      };
    }

    return averageRating;
  };

  useEffect(() => {
    if (!feedbackDocs.length) {
      if (isLoaded && feedback && !feedback.length) return setLoading(false);
      return setLoading(true);
    } else {
      return setLoading(false);
    }
  }, [feedbackDocs, feedback, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      firebase
        .firestore()
        .collection("users")
        .doc(uid)
        .collection("feedback")
        .get()
        .then((snapshot) =>
          snapshot.docs.forEach((doc) =>
            setFeedbackDocs((prev) => [
              ...prev,
              skills.reduce((map: any, current) => {
                if (doc.data().hasOwnProperty(current)) {
                  return { ...map, [current]: doc.data()[current] };
                }
                return { ...map };
              }, {}),
            ])
          )
        );
    }
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded && feedbackDocs.length > 0) {
      const summedRating = feedbackDocs.reduce((acc, doc) => {
        let docRating = {};

        for (const property in doc) {
          docRating = {
            ...docRating,
            [property]: acc[property]
              ? acc[property] + doc[property]
              : doc[property],
          };
        }

        return { ...acc, ...docRating };
      }, {});

      const averageRating = getAverageRating(summedRating);

      setTotalRating(averageRating);
    }
  }, [isLoaded, feedbackDocs]);

  return (
    <MainContainer>
      <Wrapper>
        <HeaderWrapper>
          <UserContainer>
            <UserAvatarContainer>
              {!isLoaded ? (
                <AvatarLoadingSpinner />
              ) : avatarUrl ? (
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
        <FeedbackHeader>Feedback summary</FeedbackHeader>
        <PersonalSkillsHeader>
          Personal skills and competences
        </PersonalSkillsHeader>
        <PersonalSkillsContainer>
          {!isLoaded || isLoading ? (
            <Loading />
          ) : (
            skills &&
            skills.map((skill) => (
              <SingleSkillRating skill={skill} rating={totalRating[skill]} />
            ))
          )}
        </PersonalSkillsContainer>
        <MyFeedback />
      </Wrapper>
    </MainContainer>
  );
};

export default UserFeedback;
