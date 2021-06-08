import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import smile from "../../images/homepage-smile.png";
import allTeammatesSmile from "../../images/all-teammates-smile.png";
import * as routes from "../../constants/routes";
import { useFirestoreConnect } from "react-redux-firebase";

import {
  ContentBox,
  ImageContainer,
  StyledH4,
  StyledImg,
  StyledP,
  Wrapper,
} from "./styles";

const Homepage: React.FC = () => {
  useFirestoreConnect([{ collection: "users" }]);

  const history = useHistory();

  const users = useSelector((state: ISelector) => {
    return state.firestore.ordered.users;
  });

  const { isLoaded, isEmpty, ratedUsers } = useSelector((state: ISelector) => {
    return state.firebase.profile;
  });

  if (isLoaded && isEmpty) history.push(routes.SIGN_IN);

  if (isLoaded && users && users.length - 1 === ratedUsers.length) {
    return (
      <Wrapper>
        <ContentBox>
          <ImageContainer>
            <StyledImg src={allTeammatesSmile} alt="smile" />
          </ImageContainer>
          <div>
            <StyledH4>You reviwed all your team</StyledH4>
          </div>
          <div>
            <StyledP>
              Great job! Now you can only wait for the feedback session at
              23:00, June 11.
            </StyledP>
          </div>
        </ContentBox>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <ContentBox>
          <ImageContainer>
            <StyledImg src={smile} alt="smile" />
          </ImageContainer>
          <div>
            <StyledH4>No teammate selected</StyledH4>
          </div>
          <div>
            <StyledP>
              To provide a feedback you should select an employee from the
              teammates list or to search by a name using the search field
            </StyledP>
          </div>
        </ContentBox>
      </Wrapper>
    );
  }
};

export default Homepage;
