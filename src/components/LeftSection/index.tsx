import React, { useEffect } from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "firebase/storage";

import logo from "../../images/logo.png";
import userAvatar from "../../images/user-image.png";
import * as routes from "../../constants/routes";
import SearchTeam from "./SearchTeam";

import {
  Wrapper,
  AccountOptions,
  Avatar,
  AvatarContainer,
  LogoContainer,
  Logo,
  ProfileInfoContainer,
  ProfileInfoWrapper,
  LogOutP,
  FullNameP,
  StyledLink,
  StyledSpan,
} from "./styles";

const LeftSection: React.FC = () => {
  const firebase = useFirebase();
  const history = useHistory();

  const { displayName, avatarUrl, isLoaded, isEmpty } = useSelector(
    (state: ISelector) => state.firebase.profile
  );

  const signOut = async () => {
    try {
      history.push(routes.SIGN_IN);
      await firebase.logout();
    } catch (e) {
      alert(e.message);
    }
  };

  const goToHomepage = () => {
    if (isLoaded && isEmpty) return;
    history.push(routes.HOMEPAGE);
  };

  useEffect(() => {
    if (isLoaded && isEmpty && history.location.pathname !== routes.SIGN_UP)
      history.push(routes.SIGN_IN);
  });

  return (
    <Wrapper>
      <LogoContainer>
        <Logo src={logo} alt="logo" onClick={() => goToHomepage()} />
      </LogoContainer>

      <ProfileInfoWrapper>
        <AvatarContainer>
          {avatarUrl ? (
            <Avatar src={avatarUrl} alt="avatar" />
          ) : (
            <Avatar src={userAvatar} alt="avatar" />
          )}
        </AvatarContainer>

        <ProfileInfoContainer>
          {displayName ? (
            <>
              <FullNameP to={routes.MY_PROFILE}>{displayName}</FullNameP>
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

      {displayName && <SearchTeam />}
    </Wrapper>
  );
};

export default LeftSection;
