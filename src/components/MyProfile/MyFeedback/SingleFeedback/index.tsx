import React, { useState, useEffect } from "react";
import { isLoaded, useFirebase } from "react-redux-firebase";

import * as routes from "../../../../constants/routes";
import defaultAvatar from "../../../../images/user-image.png";
import AvatarLoadingSpinner from "../../../AvatarLoadingSpinner";

import {
  UserAvatar,
  UserAvatarContainer,
  UserContainer,
  UserInfoContainer,
  UserTitle,
  UserName,
  StyledLink,
} from "./styles";

interface Props {
  doc: {
    id: string;
    userID: string;
  };
}

interface IUser {
  proffesion: string;
  avatarUrl: string;
  displayName: string;
}

const SingleFeedback: React.FC<Props> = ({ doc }) => {
  const [user, setUser] = useState<IUser>({
    avatarUrl: "",
    proffesion: "",
    displayName: "",
  });

  const firebase = useFirebase();

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(doc.userID)
      .get()
      .then((snapshot) => setUser(snapshot.data() as IUser));
  }, []);

  return (
    <StyledLink to={`${routes.FEEDBACK_DETAILS}${doc.id}`}>
      <UserContainer key={doc.id}>
        <UserAvatarContainer>
          {!user.displayName ? (
            <AvatarLoadingSpinner />
          ) : user.avatarUrl ? (
            <UserAvatar src={user.avatarUrl} />
          ) : (
            <UserAvatar src={defaultAvatar} />
          )}
        </UserAvatarContainer>
        <UserInfoContainer>
          <UserName>{user.displayName}</UserName>
          {user.proffesion && <UserTitle>{user.proffesion}</UserTitle>}
        </UserInfoContainer>
      </UserContainer>
    </StyledLink>
  );
};

export default SingleFeedback;
