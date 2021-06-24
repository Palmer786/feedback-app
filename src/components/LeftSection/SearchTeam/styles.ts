import styled from "styled-components";
import { device } from "../../../constants/device";

interface StyledComponentsProps {
  query: string;
}

export const SearchContainer = styled.div`
  width: 65%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media ${device.mobileL} {
    width: 75%;
    align-items: center;
  }

  @media ${device.mobileM} {
    width: 80%;
  }

  @media ${device.mobileS} {
    width: 90%;
  }
`;

export const SearchHeader = styled.p`
  color: ${({ theme }) => theme.color.lightGray};
  font-size: 1.6rem;
  font-weight: 400;
  margin: 0;
`;

export const SearchInputContainer = styled.div<StyledComponentsProps>`
  height: 35px;
  width: 100%;
  border-bottom: 2px solid
    ${({ query, theme }) => (query.length > 0 ? theme.color.red : "#616161")};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const IconContainer = styled.div`
  height: 100%;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSearchIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const StyledClearIcon = styled.img<StyledComponentsProps>`
  width: 18px;
  height: 18px;
  visibility: ${({ query }) => (query.length > 0 ? "visable" : "hidden")};
  cursor: pointer;
`;

export const SearchInput = styled.input`
  width: 75%;
  height: 35px;
  background: transparent;
  border: none;
  outline: none;
  color: #616161;
  font-size: 1.6rem;
`;
