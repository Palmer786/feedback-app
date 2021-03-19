import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";

import StyledInput from "../StyledInput";
import * as routes from "../../constants/routes";

interface UserData {
  email: string;
  firstName: string;
  lastName: string;
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
        { email, firstName, lastName, fullName: `${firstName} ${lastName}` }
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
