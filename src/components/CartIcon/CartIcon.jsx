import React from "react";

import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";

import { CartCount, Container } from "./CartIcon.styles";

const CartIcon = () => {
  return (
    <Container>
      <Icon />
      <CartCount>0</CartCount>
    </Container>
  );
};

export default CartIcon;
