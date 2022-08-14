import React from "react";
import { ItemDetails, Title, Container } from "./CartItem.styles";

const CartItem = ({ product: { title, imageUrl, price, count } }) => {
  return (
    <Container>
      <img src={imageUrl} alt="title" />
      <ItemDetails>
        <Title>{title}</Title>
        <span>
          {price} * {count}
        </span>
      </ItemDetails>
    </Container>
  );
};

export default CartItem;
