import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";

import StyledInput from "../StyledInput";
import * as routes from "../../constants/routes";

import {
  StyledLink,
  LinkBox,
  ContentBox,
  Wrapper,
  Header,
  PrimaryButton,
  ShortInputWrapper,
} from "./styles";

interface UserData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });

  const { firstName, lastName, email, password } = userData;

  const history = useHistory();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUserData((prev) => ({ ...prev, [id]: value }));
  };

  const firebase = useFirebase();

  const createAccount = async () => {
    if (firstName.length < 3)
      return alert("First Name should be at least 3 characters");
    if (lastName.length < 3)
      return alert("Last Name should be at least 3 characters");
    try {
      await firebase.createUser(
        { email, password },
        { email, displayName: `${firstName} ${lastName}` }
      );
      history.push(routes.HOMEPAGE);
    } catch (e) {
      alert(e.message);
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") return createAccount();
  };

  return (
    <Wrapper>
      <ContentBox onKeyUp={handleKeyUp}>
        <Header>Create account to provide a feedback</Header>
        <ShortInputWrapper>
          <StyledInput
            type="text"
            placeholder="first name"
            short
            value={firstName}
            id="firstName"
            onChange={handleInputChange}
          />
          <StyledInput
            type="text"
            placeholder="last name"
            short
            value={lastName}
            id="lastName"
            onChange={handleInputChange}
          />
        </ShortInputWrapper>
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
          <StyledLink to={routes.SIGN_IN}>Have an account? Log In</StyledLink>
          <PrimaryButton onClick={() => createAccount()}>
            Create account
          </PrimaryButton>
        </LinkBox>
      </ContentBox>
    </Wrapper>
  );
};

export default SignUp;
