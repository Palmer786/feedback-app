import React, { useEffect } from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "firebase/storage";

import { showNotification } from "../../constants/notification";
import logo from "../../images/logo.png";
import userAvatar from "../../images/user-image.png";
import * as routes from "../../constants/routes";
import SearchTeam from "./SearchTeam";
import { toggleMenuOpen } from "../actions/menu";
import Loading from "../Loading";

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

  const dispatch = useDispatch();

  const { displayName, avatarUrl, isLoaded, isEmpty } = useSelector(
    (state: ISelector) => state.firebase.profile
  );

  const isMenuOpen = useSelector((state: ISelector) => {
    return state.isMenuOpen;
  });

  const signOut = async () => {
    try {
      history.push(routes.SIGN_IN);
      dispatch(toggleMenuOpen);
      await firebase.logout();
      showNotification(
        "Success!",
        "You have successfully logged out!",
        "success"
      );
    } catch (e) {
      showNotification("Error", e.message, "danger");
    }
  };

  const goToHomepage = () => {
    if (isLoaded && isEmpty) return;
    dispatch(toggleMenuOpen);
    history.push(routes.HOMEPAGE);
  };

  useEffect(() => {
    if (isLoaded && isEmpty && history.location.pathname !== routes.SIGN_UP)
      history.push(routes.SIGN_IN);
  });

  return (
    <Wrapper isMenuOpen={isMenuOpen}>
      <LogoContainer>
        <Logo src={logo} alt="logo" onClick={() => goToHomepage()} />
      </LogoContainer>
      {!isLoaded ? (
        <Loading />
      ) : (
        <ProfileInfoWrapper>
          <AvatarContainer onClick={() => history.push(routes.MY_PROFILE)}>
            {avatarUrl ? (
              <Avatar src={avatarUrl} alt="avatar" />
            ) : (
              <Avatar src={userAvatar} alt="avatar" />
            )}
          </AvatarContainer>

          <ProfileInfoContainer>
            {displayName ? (
              <>
                <FullNameP
                  to={routes.MY_PROFILE}
                  onClick={() => dispatch(toggleMenuOpen)}
                >
                  {displayName}
                </FullNameP>
                <LogOutP onClick={() => signOut()}>Log out</LogOutP>
              </>
            ) : (
              <AccountOptions>
                <StyledLink
                  to={routes.SIGN_IN}
                  onClick={() => dispatch(toggleMenuOpen)}
                >
                  Sign in
                </StyledLink>
                <StyledSpan>/</StyledSpan>
                <StyledLink
                  to={routes.SIGN_UP}
                  onClick={() => dispatch(toggleMenuOpen)}
                >
                  Join
                </StyledLink>
              </AccountOptions>
            )}
          </ProfileInfoContainer>
        </ProfileInfoWrapper>
      )}
      {displayName && <SearchTeam />}
    </Wrapper>
  );
};

export default LeftSection;
