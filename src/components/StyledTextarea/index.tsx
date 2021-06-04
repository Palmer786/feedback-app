import React from "react";

import { StyledLabel, StyledTextArea, TextareaWrapper } from "./styles";

interface Props {
  placeholder: string;
  value: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const StyledTextareaComponent: React.FC<Props> = ({
  value,
  onChange,
  placeholder,
  id,
}) => (
  <TextareaWrapper>
    <StyledLabel value={value}>{placeholder}</StyledLabel>
    <StyledTextArea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id={id}
    />
  </TextareaWrapper>
);

export default StyledTextareaComponent;
