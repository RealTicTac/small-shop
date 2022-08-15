import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button";
import { toggleCartOpen } from "src/redux/slices/cart.slice";
import useOnClickOutside from "src/utils/hooks/useOnClickOutside";

import { Container, CartItems, EmptyMessage } from "./CartDropdown.styles";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const ref = useOnClickOutside(() => dispatch(toggleCartOpen()));

  const onCheckoutHandler = () => {
    navigate("shop/checkout");
    dispatch(toggleCartOpen());
  };
  return (
    <Container ref={ref}>
      <CartItems>
        {cartItems.length === 0 && (
          <EmptyMessage>No items in cart</EmptyMessage>
        )}
        {cartItems &&
          cartItems.map((item) => <CartItem product={item} key={item.id} />)}
      </CartItems>
      <Button onClick={onCheckoutHandler}>go to checkout</Button>
    </Container>
  );
};

export default CartDropdown;
