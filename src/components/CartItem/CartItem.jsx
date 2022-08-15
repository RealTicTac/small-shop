import React from "react";
import { ItemDetails, Title, Container } from "./CartItem.styles";

const CartItem = ({ product: { name, imageUrl, price, count } }) => {
  return (
    <Container>
      <img src={imageUrl} alt="title" />
      <ItemDetails>
        <Title>{name}</Title>
        <span>
          ${price}x{count}
        </span>
      </ItemDetails>
    </Container>
  );
};

export default CartItem;
