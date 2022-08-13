import React from "react";

import { ReactComponent as Logo } from "../../assets/Logo.svg";
import {
  LogoContrainer,
  NavBarContainer,
  NavLink,
  NavLinks,
} from "./NabBar.styles";

const NavBar = () => {
  return (
    <NavBarContainer>
      <LogoContrainer to="/">
        <Logo />
      </LogoContrainer>
      <NavLinks>
        <NavLink to="shop">Shop</NavLink>
        <NavLink to="/auth">Sign In</NavLink>
      </NavLinks>
    </NavBarContainer>
  );
};

export default NavBar;
