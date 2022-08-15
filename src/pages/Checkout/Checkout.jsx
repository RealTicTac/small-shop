import React from "react";
import { useSelector } from "react-redux";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { selectTotalPrice } from "src/redux/slices/cart.slice";

import {
  Container,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./Checkout.styles";

const Checkout = () => {
  const checkoutItems = useSelector((state) => state.cart.items);
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
    </Container>
  );
};

export default Checkout;
