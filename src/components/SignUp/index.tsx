import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";
import Joi from "joi";

import StyledInput from "../StyledInput";
import * as routes from "../../constants/routes";
import { basicSkills } from "../../constants/basicSkills";
import { showNotification } from "../../constants/notification";

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

  const schema = Joi.object({
    firstName: Joi.string().min(3).max(20).required(),
    lastName: Joi.string().min(3).max(20).required(),
    password: Joi.string().min(3).max(25).required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "pl"] },
    }),
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUserData((prev) => ({ ...prev, [id]: value }));
  };

  const firebase = useFirebase();

  const createAccount = async () => {
    try {
      const { error, value } = schema.validate(userData);
      if (error)
        return showNotification("Error", error.details[0].message, "danger");

      await firebase.createUser(
        { email, password },
        {
          email,
          displayName: `${firstName} ${lastName}`,
          skills: basicSkills,
          ratedUsers: [],
        }
      );
      history.push(routes.HOMEPAGE);
      showNotification("Succes!", "Your account has been created.", "success");
    } catch (e) {
      showNotification("Error", e.message, "danger");
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
