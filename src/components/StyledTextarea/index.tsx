import React from 'react';
import styled from 'styled-components'

interface Props {
    placeholder: string;
    value: string;
    id: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaWrapper = styled.div`
  width: 100%;
`;

const StyledTextArea = styled.textarea<{ value: string }>`
  width: 100%;
  height: 60%;
  border: none;
  font-size: 1.6rem;
  border-bottom: ${({ value, theme }) =>
    value.length > 1
        ? `2px solid ${theme.color.red}`
        : `2px solid #D3D4D5`};
  padding: 1rem 0;
  color: ${({ theme }) => theme.color.gray};

  :focus {
    border-bottom: 2px solid ${({ theme }) => theme.color.red};
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.color.lightGray};
  }

  overflow-y: auto;
  resize: none;

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background: whitesmoke;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.color.red};
  }
  
`;

const StyledLabel = styled.label<{ value: string }>`
  visibility: ${({ value }) => (value.length > 0 ? "visible" : "hidden")};
  color: ${({ theme }) => theme.color.red};
  font-size: 1.2rem;
  text-transform: capitalize;
`;

const StyledTextareaComponent: React.FC<Props> = ({value, onChange, placeholder, id}) => (
    <TextareaWrapper>
        <StyledLabel value={value}>{placeholder}</StyledLabel>
        <StyledTextArea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            id={id}
        />
    </TextareaWrapper>
)

export default StyledTextareaComponent;