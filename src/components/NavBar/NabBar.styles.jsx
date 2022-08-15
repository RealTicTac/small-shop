import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const NavBarContainer = styled("div")`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContrainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const NavLinks = styled("div")`
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const NavLink = styled(Link)`
  padding: 10px 15px;
  white-space: nowrap;
  cursor: pointer;
`;

export const SignOut = styled("span")`
  padding: 10px 25px;
  white-space: nowrap;
  cursor: pointer;
`;
