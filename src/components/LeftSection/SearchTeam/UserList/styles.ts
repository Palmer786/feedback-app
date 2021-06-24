import styled from "styled-components";

export const UserListContainer = styled.div`
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

export const UserContainer = styled.div`
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

export const UserAvatarContainer = styled.div`
  height: 100%;
  width: 56px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
`;

export const UserAvatar = styled.img`
  height: 80%;
  width: 80%;
  border-radius: 50%;
  background: white;
`;

export const UserName = styled.p`
  font-size: 1.6rem;
  color: white;
  width: calc(100% - 88px);
`;

export const RatedIconContainer = styled.div`
  width: 32px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: flex-end;
`

export const RatedIcon = styled.img`
  width: 18px;
  height: 18px;
`
