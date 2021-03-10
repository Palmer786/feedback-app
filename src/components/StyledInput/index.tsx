import React from "react";
import styled from "styled-components";

interface Props {
  placeholder: string;
  type: string;
  short?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface StyledComponentProps {
  value: string;
}

interface StyledLabelProps {
  value: string;
}

interface InputWrapperProps {
  short: boolean;
}

const InputWrapper = styled.div<InputWrapperProps>`
  width: ${({ short }) => (short ? "30%" : "80%")};
`;

const StyledInput = styled.input<StyledComponentProps>`
  width: 100%;
  border: none;
  font-size: 1.6rem;
  border-bottom: ${({ value, theme }) =>
    value.length > 1
      ? `2px solid ${theme.color.red}`
      : `2px solid ${theme.color.lightGray}`};
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

const StyledLabel = styled.label<StyledLabelProps>`
  visibility: ${({ value }) => (value.length > 0 ? "visible" : "hidden")};
  color: ${({ theme }) => theme.color.red};
  font-size: 1.2rem;
  text-transform: capitalize;
`;

const StyledInputComponent: React.FC<Props> = ({
  type,
  placeholder,
  short = false,
  value,
  onChange,
}) => {
  return (
    <InputWrapper short={short}>
      <StyledLabel value={value}>{placeholder}</StyledLabel>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export default StyledInputComponent;
