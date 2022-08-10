import React from "react";

import { ReactComponent as Logo } from "../../assets/Logo.svg";
import {
  StyledLogo,
  StyledNavBar,
  StyledNavLink,
  StyledNavLinks,
} from "./NabBar.styles";

const NavBar = () => {
  return (
    <StyledNavBar>
      <StyledLogo to="/">
        <Logo />
      </StyledLogo>
      <StyledNavLinks>
        <StyledNavLink to="shop">Shop</StyledNavLink>
        <StyledNavLink to="sign-in">Sign In</StyledNavLink>
      </StyledNavLinks>
    </StyledNavBar>
  );
};

export default NavBar;
