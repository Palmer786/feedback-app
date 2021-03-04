import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 75%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentBox = styled.div`
  height: 50%;
  width: 60%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  font-weight: 300;
  color: #4e5357;
  font-size: 4.8rem;
`;

const StyledInput = styled.input`
  width: 80%;
  border: none;
  font-size: 1.6rem;
  border-bottom: 2px solid #a7a9ab;
  padding: 1rem 0;
  color: #4e5357;

  :focus {
    border-bottom: 2px solid #ec1940;
    outline: none;
  }

  ::placeholder {
    color: #a7a9ab;
  }
`;

const LinkBox = styled.div`
  width: 80%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PrimaryButton = styled.button`
  height: 70%;
  width: 35%;
  border-radius: 4px;
  background: #ec1940;
  font-size: 1.4rem;
  font-weight: 500;
  color: white;
  border: none;
  cursor: pointer;
  transition: 0.1s background;

  :hover {
    background: #fa1743;
    transition: 0.1s background;
  }
`;

const StyledLink = styled(Link)`
  font-weight: 500;
  font-size: 1.4rem;
  color: #4e5357;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const SignIn: React.FC = () => {
  return (
    <Wrapper>
      <ContentBox>
        <Header>Log in to provide a feedback</Header>
        <StyledInput type="text" placeholder="email" />
        <StyledInput type="text" placeholder="password" />
        <LinkBox>
          <StyledLink to="">You don't have account? Sign up!</StyledLink>
          <PrimaryButton>LOG IN</PrimaryButton>
        </LinkBox>
      </ContentBox>
    </Wrapper>
  );
};

export default SignIn;
