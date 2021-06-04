import React, { useState, useRef } from "react";

import searchIcon from "../../../images/search-icon.png";
import searchIconActive from "../../../images/search-icon-active.png";
import clearIcon from "../../../images/clear-icon.png";
import UserList from "./UserList";

import {
  IconContainer,
  SearchContainer,
  SearchHeader,
  SearchInputContainer,
  SearchInput,
  StyledClearIcon,
  StyledSearchIcon,
} from "./styles";

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
