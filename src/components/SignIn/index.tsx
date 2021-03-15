import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import * as routes from "../../constants/routes";
import StyledInput from "../StyledInput";
import { useFirebase } from "react-redux-firebase";

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
  color: ${({ theme }) => theme.color.gray};
  font-size: 4.8rem;
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
  background: ${({ theme }) => theme.color.red};
  font-size: 1.4rem;
  font-weight: 500;
  color: white;
  border: none;
  cursor: pointer;
  transition: 0.1s background;

  :hover {
    background: ${({ theme }) => theme.color.lightRed};
    transition: 0.1s background;
  }
`;

const StyledLink = styled(Link)`
  font-weight: 500;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.gray};
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const firebase = useFirebase();

  const logIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      alert("Logged in");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <Wrapper>
      <ContentBox>
        <Header>Log in to provide a feedback</Header>
        <StyledInput
          type="text"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
        />
        <StyledInput
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <LinkBox>
          <StyledLink to={routes.SIGN_UP}>
            Don't have account? Sign up
          </StyledLink>
          <PrimaryButton onClick={() => logIn()}>LOG IN</PrimaryButton>
        </LinkBox>
      </ContentBox>
    </Wrapper>
  );
};

export default SignIn;
