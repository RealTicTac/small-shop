import React from "react";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

import {
  Container,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./Checkout.styles";

const Checkout = () => {
  const { cartTotal } = { cartTotal: 0 };
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
      {[].map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <Total>Total: ${cartTotal}</Total>
    </Container>
  );
};

export default Checkout;
