import React from "react";
import styled from "styled-components";

import smile from "../../images/homepage-smile.png";

const Wrapper = styled.div`
  width: 75%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentBox = styled.div`
  height: 50%;
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 156px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledImg = styled.img`
  height: 100%;
`;

const StyledH4 = styled.h4`
  color: ${({ theme }) => theme.color.gray};
  font-size: 5.0rem;
  font-weight: 300;
  margin: 0;
`;

const StyledP = styled.p`
  color: ${({ theme }) => theme.color.lightGray};
  font-size: 1.8rem;
`;

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
