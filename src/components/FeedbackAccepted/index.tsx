import React from "react";

import smile from "../../images/feedback-accepted-smile.png";

import {
  ContentBox,
  ImageContainer,
  StyledH4,
  StyledImg,
  StyledP,
  Wrapper,
} from "./styles";

const FeedbackAccepted: React.FC = () => (
  <Wrapper>
    <ContentBox>
      <ImageContainer>
        <StyledImg src={smile} alt="smile" />
      </ImageContainer>
      <div>
        <StyledH4>Your feedback accepted</StyledH4>
      </div>
      <div>
        <StyledP>You can review other your teammates</StyledP>
      </div>
    </ContentBox>
  </Wrapper>
);

export default FeedbackAccepted;
