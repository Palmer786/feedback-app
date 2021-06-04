import React from "react";

import { StyledInput, InputWrapper, StyledLabel } from "./styles";

interface Props {
  placeholder: string;
  type: string;
  short?: boolean;
  value: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInputComponent: React.FC<Props> = ({
  type,
  placeholder,
  short = false,
  value,
  id,
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
        id={id}
      />
    </InputWrapper>
  );
};

export default StyledInputComponent;
