import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";

import * as routes from "../../constants/routes";
import StyledInput from "../StyledInput";
import googleIcon from "../../images/google-icon.png";

import {
  Wrapper,
  ContentBox,
  StyledLink,
  GoogleButton,
  Header,
  PrimaryButton,
  LinkBox,
} from "./styles";

interface LoginData {
  email: string;
  password: string;
}

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
