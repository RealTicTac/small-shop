import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  toggleCartOpen,
  selectTotalCount,
} from "../../redux/slices/cart.slice";
import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";

import { CartCount, Container } from "./CartIcon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartTotal = useSelector(selectTotalCount);
  const onCartOpenHandler = () => {
    dispatch(toggleCartOpen());
  };
  return (
    <Container onClick={onCartOpenHandler}>
      <Icon />
      <CartCount>{cartTotal}</CartCount>
    </Container>
  );
};

export default CartIcon;
