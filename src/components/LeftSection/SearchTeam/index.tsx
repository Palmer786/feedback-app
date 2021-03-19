import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";

import searchIcon from "../../../images/search-icon.png";
import searchIconActive from "../../../images/search-icon-active.png";
import clearIcon from "../../../images/clear-icon.png";
import UserList from "./UserList";

interface StyledComponentsProps {
  query: string;
}

const SearchContainer = styled.div`
  width: 65%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const SearchHeader = styled.p`
  color: ${({ theme }) => theme.color.lightGray};
  font-size: 1.6rem;
  font-weight: 400;
  margin: 0;
`;

const SearchInputContainer = styled.div<StyledComponentsProps>`
  height: 35px;
  width: 100%;
  border-bottom: 2px solid
    ${({ query, theme }) => (query.length > 0 ? theme.color.red : "#616161")};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const IconContainer = styled.div`
  height: 100%;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSearchIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const StyledClearIcon = styled.img<StyledComponentsProps>`
  width: 18px;
  height: 18px;
  visibility: ${({ query }) => (query.length > 0 ? "visable" : "hidden")};
  cursor: pointer;
`;

const SearchInput = styled.input`
  width: 75%;
  height: 35px;
  background: transparent;
  border: none;
  outline: none;
  color: #616161;
  font-size: 1.6rem;
`;

const SearchTeam: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  const inputRef = useRef<HTMLInputElement>(document.createElement("input"));

  const clearInput = () => {
    setQuery("");
    inputRef.current.focus();
  };

  return (
    <SearchContainer>
      <SearchHeader>YOUR TEAMMATES</SearchHeader>
      <SearchInputContainer query={query}>
        <IconContainer>
          <StyledSearchIcon
            src={query.length > 0 ? searchIconActive : searchIcon}
            alt="search"
          />
        </IconContainer>
        <SearchInput
          type="text"
          placeholder="Search a teammate"
          value={query}
          onChange={handleQueryChange}
          ref={inputRef}
        />
        <IconContainer>
          <StyledClearIcon
            src={clearIcon}
            alt="clear"
            query={query}
            onClick={() => clearInput()}
          />
        </IconContainer>
      </SearchInputContainer>
      <UserList query={query} />
    </SearchContainer>
  );
};

export default SearchTeam;
