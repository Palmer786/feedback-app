import React from "react";
import styled from "styled-components";

import smile from "../../images/homepage-smile.png";

import {
  ContentBox,
  ImageContainer,
  StyledH4,
  StyledImg,
  StyledP,
  Wrapper,
} from "./styles";

const Homepage: React.FC = () => (
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
          To provide a feedback you should select an employee from the teammates
          list or to search by a name using the search field
        </StyledP>
      </div>
    </ContentBox>
  </Wrapper>
);

export default Homepage;
