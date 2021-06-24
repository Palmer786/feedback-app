import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleMenuOpen } from "../actions/menu";

import { MenuButtonLine, MenuButtonWrapper } from "./styles";

const MenuButton: React.FC = () => {
  const dispatch = useDispatch();

  const isMenuOpen = useSelector((state: ISelector) => state.isMenuOpen);

  return (
    <MenuButtonWrapper onClick={() => dispatch(toggleMenuOpen)}>
      <MenuButtonLine isMenuOpen={isMenuOpen} />
      <MenuButtonLine isMenuOpen={isMenuOpen} />
      <MenuButtonLine isMenuOpen={isMenuOpen} />
    </MenuButtonWrapper>
  );
};

export default MenuButton;
