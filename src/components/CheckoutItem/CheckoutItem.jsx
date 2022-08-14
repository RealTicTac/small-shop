import React from "react";

import {
  Arrow,
  Container,
  Count,
  CountContainer,
  ImageContainer,
  Price,
  RemoveButton,
  Title,
} from "./CheckoutItem.styles";

const CheckOutItem = ({ cartItem }) => {
  const { imageUrl, title, price, count } = cartItem;
  return (
    <Container>
      <ImageContainer>
        <img src={imageUrl} alt={title} />
      </ImageContainer>
      <Title>{title}</Title>
      <CountContainer>
        <Arrow>&#10094;</Arrow>
        <Count>{count}</Count>
        <Arrow>&#10095;</Arrow>
      </CountContainer>
      <Price>{price}</Price>
      <RemoveButton>&#10085;</RemoveButton>
    </Container>
  );
};

export default CheckOutItem;
