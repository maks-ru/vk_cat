import React from "react";
import { StyledNav, StyledNavWrapper, StyledNavLink } from "./styles";

function Nav({ onTransfer }) {
  return (
    <StyledNav>
      <StyledNavWrapper>
        <StyledNavLink to="/vk_cat">Все котики</StyledNavLink>
        <StyledNavLink to="/favorites">Любимые котики</StyledNavLink>
      </StyledNavWrapper>
    </StyledNav>
  );
}

export default Nav;
