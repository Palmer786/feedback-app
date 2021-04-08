import styled from "styled-components";

interface StyledComponentProps {
  value: string;
}

interface StyledLabelProps {
  value: string;
}

interface InputWrapperProps {
  short: boolean;
}

export const InputWrapper = styled.div<InputWrapperProps>`
  width: ${({ short }) => (short ? "30%" : "80%")};
`;

export const StyledInput = styled.input<StyledComponentProps>`
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

export const StyledLabel = styled.label<StyledLabelProps>`
  visibility: ${({ value }) => (value.length > 0 ? "visible" : "hidden")};
  color: ${({ theme }) => theme.color.red};
  font-size: 1.2rem;
  text-transform: capitalize;
`;
