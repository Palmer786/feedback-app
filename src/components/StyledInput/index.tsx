import React from "react";
import styled from "styled-components";

interface Props {
  placeholder: string;
  type: string;
  short?: boolean;
}

const StyledInput = styled.input<{ short: boolean }>`
  width: ${({ short }) => (short ? "30%" : "80%")};
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

const StyledInputComponent: React.FC<Props> = ({
  type,
  placeholder,
  short = false,
}) => {
  return <StyledInput type={type} placeholder={placeholder} short={short} />;
};

export default StyledInputComponent;
