import React from "react";
import { useSelector } from "react-redux";

import CheckoutItem from "components/CheckoutItem/CheckoutItem";
import { selectTotalPrice } from "redux/slices/cart.slice";
import { setNewOrder } from "utils/firebase/firebase.utils";

import {
  Container,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./Checkout.styles";

const Checkout = () => {
  const handleOrder = () => {
    if (user) setNewOrder(user, checkoutItems);
  };
  const checkoutItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.user.currentUser);
  const cartTotal = useSelector(selectTotalPrice);
  return (
    <Container>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {checkoutItems.length ? (
        checkoutItems.map((cartItem) => {
          return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
        })
      ) : (
        <span>The cart is empty now</span>
      )}
      <Total>Total: ${cartTotal}</Total>
      <button onClick={handleOrder}>Create order</button>
    </Container>
  );
};

export default Checkout;
