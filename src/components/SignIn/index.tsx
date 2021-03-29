import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";

import * as routes from "../../constants/routes";
import StyledInput from "../StyledInput";
import googleIcon from "../../images/google-icon.png";

interface LoginData {
  email: string;
  password: string;
}

const Wrapper = styled.div`
  width: 75%;
  min-height: 840px;
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

const GoogleButton = styled(PrimaryButton)`
  background: #1151ea;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  :hover {
    background: #175af5;
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
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const { email, password } = loginData;

  const history = useHistory();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLoginData((prev) => ({ ...prev, [id]: value }));
  };

  const firebase = useFirebase();

  const logInEmail = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push(routes.HOMEPAGE);
    } catch (e) {
      alert(e.message);
    }
  };

  const logInGoogle = async () => {
    try {
      await firebase.login({
        provider: "google",
        type: "popup",
      });
      history.push(routes.HOMEPAGE);
    } catch (e) {
      alert(e.message);
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") return logInEmail();
  };

  return (
    <Wrapper>
      <ContentBox onKeyUp={handleKeyUp}>
        <Header>Log in to provide a feedback</Header>
        <StyledInput
          type="text"
          placeholder="email"
          value={email}
          id="email"
          onChange={handleInputChange}
        />
        <StyledInput
          type="password"
          placeholder="password"
          value={password}
          id="password"
          onChange={handleInputChange}
        />
        <LinkBox>
          <StyledLink to={routes.SIGN_UP}>
            Don't have account? Sign up
          </StyledLink>
          <GoogleButton onClick={() => logInGoogle()}>
            <span>
              <img src={googleIcon} alt="google" style={{ width: "80%" }} />
            </span>
            Sign in with Google
          </GoogleButton>
          <PrimaryButton onClick={() => logInEmail()}>LOG IN</PrimaryButton>
        </LinkBox>
      </ContentBox>
    </Wrapper>
  );
};

export default SignIn;
