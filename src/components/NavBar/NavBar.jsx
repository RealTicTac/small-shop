import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { ReactComponent as Logo } from "../../assets/Logo.svg";
import CartDropdown from "../CartDropdown/CartDropdown";
import CartIcon from "../CartIcon/CartIcon";
import {
  LogoContrainer,
  NavBarContainer,
  NavLink,
  NavLinks,
  SignOut,
} from "./NabBar.styles";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { setUser } from "../../redux/slices/user.slice";

const NavBar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state?.user?.currentUser);
  const isCartOpen = useSelector((state) => state?.cart?.isCartOpen);

  const signOutHandler = () => {
    signOutUser();
    dispatch(setUser(null));
  };
  return (
    <>
      <NavBarContainer>
        <LogoContrainer to="/">
          <Logo />
        </LogoContrainer>
        <NavLinks>
          <NavLink to="shop">Shop</NavLink>
          {currentUser ? (
            <>
              <NavLink to="/history">History</NavLink>
              <SignOut onClick={signOutHandler}>Sign out</SignOut>
            </>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinks>
      </NavBarContainer>
      {isCartOpen && <CartDropdown />}
    </>
  );
};

export default NavBar;
