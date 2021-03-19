import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import styled from "styled-components";

interface Props {
  query: string;
}

const UserListContainer = styled.div`
  width: 100%;
  height: 75%;
  overflow-y: auto;

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

const UserContainer = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const UserAvatarContainer = styled.div`
  height: 100%;
  width: 56px;
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
`;

const UserName = styled.p`
  font-size: 1.6rem;
  color: white;
  margin-left: 14px;
`;

const UserList: React.FC<Props> = ({ query }) => {
  useFirestoreConnect([{ collection: "users" }]);

  const users = useSelector((state: ISelector) => {
    return state.firestore.ordered.users;
  });

  const currentUserUID = useSelector((state: ISelector) => {
    return state.firebase.auth.uid;
  });

  return (
    <UserListContainer>
      {users &&
        users
          .filter((user) =>
            user.fullName.toLowerCase().includes(query.toLowerCase())
          )
          .map((filteredUser) => {
            const { id, fullName } = filteredUser;
            if (id === currentUserUID) return;
            return (
              <UserContainer key={id}>
                <UserAvatarContainer>
                  <UserAvatar />
                </UserAvatarContainer>
                <UserName>{fullName}</UserName>
              </UserContainer>
            );
          })}
    </UserListContainer>
  );
};

export default UserList;
