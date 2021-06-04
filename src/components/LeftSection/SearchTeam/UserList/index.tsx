import React from "react";
import { useSelector } from "react-redux";
import { isLoaded, useFirestoreConnect } from "react-redux-firebase";
import { useHistory } from "react-router-dom";

import ratedIcon from "../../../../images/rated-icon.png";
import * as routes from "../../../../constants/routes";
import userAvatar from "../../../../images/user-image.png";

import {
  UserAvatar,
  UserAvatarContainer,
  UserContainer,
  UserListContainer,
  UserName,
  RatedIcon,
  RatedIconContainer,
} from "./styles";

interface Props {
  query: string;
}

const UserList: React.FC<Props> = ({ query }) => {
  useFirestoreConnect([{ collection: "users" }]);

  const history = useHistory();

  const users = useSelector((state: ISelector) => {
    return state.firestore.ordered.users;
  });

  const ratedUsers = useSelector((state: ISelector) => {
    return state.firebase.profile.ratedUsers;
  });

  const currentUserUID = useSelector((state: ISelector) => {
    return state.firebase.auth.uid;
  });

  const handleOnClick = (id: string) =>
    history.push(`${routes.USER_FEEDBACK}${id}`);

  if (!isLoaded()) return <p>Loading...</p>;

  return (
    <UserListContainer>
      {users &&
        users
          .filter((user) =>
            user.displayName.toLowerCase().includes(query.toLowerCase())
          )
          .map((filteredUser) => {
            const { id, displayName, avatarUrl } = filteredUser;
            if (id === currentUserUID) return null;
            return (
              <UserContainer key={id} onClick={() => handleOnClick(id)}>
                <UserAvatarContainer>
                  {avatarUrl ? (
                    <UserAvatar src={avatarUrl} alt="avatar" />
                  ) : (
                    <UserAvatar src={userAvatar} alt="avatar" />
                  )}
                </UserAvatarContainer>
                <UserName>{displayName}</UserName>
                {ratedUsers.filter((userID) => userID === id).length > 0 ? (
                  <RatedIconContainer style={{ width: "10%", height: "100%" }}>
                    <RatedIcon src={ratedIcon} alt="rated" />
                  </RatedIconContainer>
                ) : null}
              </UserContainer>
            );
          })}
    </UserListContainer>
  );
};

export default UserList;
