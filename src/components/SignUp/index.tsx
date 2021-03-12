import React, { useState } from "react";
import styled from "styled-components";

import StyledInput from "../StyledInput";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";
import { useFirebase } from "react-redux-firebase";

const Wrapper = styled.div`
  width: 75%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentBox = styled.div`
  height: 58%;
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

const ShortInputWrapper = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const LinkBox = styled.div`
  width: 80%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const PrimaryButton = styled.button`
  height: 60%;
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

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFirstName(e.target.value);

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLastName(e.target.value);

  const firebase = useFirebase();

  const createAccount = async () => {
    if (firstName.length < 3)
      return alert("First Name should be at least 3 characters");
    if (lastName.length < 3)
      return alert("Last Name should be at least 3 characters");
    try {
      await firebase.createUser(
        { email, password },
        { email, firstName, lastName }
      );
      alert("Your account has been created");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <Wrapper>
      <ContentBox>
        <Header>Create account to provide a feedback</Header>
        <ShortInputWrapper>
          <StyledInput
            type="text"
            placeholder="first name"
            short
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <StyledInput
            type="text"
            placeholder="last name"
            short
            value={lastName}
            onChange={handleLastNameChange}
          />
        </ShortInputWrapper>
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
