import React from "react";
import styled from "styled-components";

import StyledInput from "../StyledInput";

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

const ShortInput = styled.input`
  width: 30%;
  border: none;
  font-size: 1.6rem;
  border-bottom: 2px solid ${({ theme }) => theme.color.lightGray};
  padding: 1rem 0;
  color: ${({ theme }) => theme.color.gray};

  :focus {
    border-bottom: 2px solid ${({ theme }) => theme.color.red};
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.color.lightGray};
  }
`;

const LinkBox = styled.div`
  width: 80%;
  height: 15%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
  return (
    <Wrapper>
      <ContentBox>
        <Header>Create account to provide a feedback</Header>
        <ShortInputWrapper>
          <StyledInput type="text" placeholder="first name" short />
          <StyledInput type="text" placeholder="last name" short />
        </ShortInputWrapper>
        <StyledInput type="text" placeholder="email" />
        <StyledInput type="text" placeholder="password" />
        <LinkBox>
          <PrimaryButton>Create account</PrimaryButton>
        </LinkBox>
      </ContentBox>
    </Wrapper>
  );
};

export default SignUp;
