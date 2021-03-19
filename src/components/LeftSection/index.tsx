import React from "react";
import styled from "styled-components";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import * as routes from "../../constants/routes";
import SearchTeam from "./SearchTeam";

const Wrapper = styled.div`
  width: 25%;
  min-height: 840px;
  height: 100vh;
  background: #22282d;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  width: 65%;
  height: 160px;
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.img`
  height: 64px;
  user-select: none;
`;

const ProfileInfoWrapper = styled.div`
  height: 80px;
  width: 65%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AvatarContainer = styled.div`
  height: 100%;
  width: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  border-radius: 50%;
  background: white;
  width: 75%;
  height: 75%;
`;

const ProfileInfoContainer = styled.div`
  width: 74.3%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const FullNameP = styled.p`
  color: white;
  font-size: 1.6rem;
  margin: 0;
`;

const LogOutP = styled.p`
  color: white;
  margin: 0;
  font-size: 1.2rem;
  cursor: pointer;

  :hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.color.lightGray};
  }
`;

const AccountOptions = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  color: white;
  font-size: 1.6rem;
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.color.lightGray};
  }
`;

const StyledSpan = styled.span`
  color: whitesmoke;
  font-size: 1.6rem;
  width: 24px;
  text-align: center;
`;

const LeftSection: React.FC = () => {
  const firebase = useFirebase();
  const history = useHistory();

  const { fullName,isLoaded, isEmpty } = useSelector(
    (state: ISelector) => state.firebase.profile
  );



  const signOut = async () => {
    try {
      await firebase.logout();
      history.push(routes.SIGN_IN);
    } catch (e) {
      alert(e.message);
    }
  };

  if (isLoaded && isEmpty && history.location.pathname !== routes.SIGN_UP)
    history.push(routes.SIGN_IN);

  return (
    <Wrapper>
      <LogoContainer>
        <Logo src={logo} alt="logo" />
      </LogoContainer>

      <ProfileInfoWrapper>
        <AvatarContainer>
          <Avatar />
        </AvatarContainer>

        <ProfileInfoContainer>
          {fullName ? (
            <>
              <FullNameP>{fullName}</FullNameP>
              <LogOutP onClick={() => signOut()}>Log out</LogOutP>
            </>
          ) : (
            <AccountOptions>
              <StyledLink to={routes.SIGN_IN}>Sign in</StyledLink>
              <StyledSpan>/</StyledSpan>
              <StyledLink to={routes.SIGN_UP}>Join</StyledLink>
            </AccountOptions>
          )}
        </ProfileInfoContainer>
      </ProfileInfoWrapper>

      {fullName && <SearchTeam />}
    </Wrapper>
  );
};

export default LeftSection;
