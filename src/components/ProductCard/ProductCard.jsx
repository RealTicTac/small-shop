import React from "react";

import { Button } from "../Button/Button";

import { Name, Price, Container, Info, Image } from "./ProductCard.styles";

const ProductCard = ({ product }) => {
  const { imageUrl, title, price } = product;

  return (
    <Container>
      <Image src={imageUrl} alt={title}></Image>
      <Info>
        <Name>{title}</Name>
        <Price>{price}</Price>
      </Info>
      <Button buttonType="inverted">Add to cart</Button>
    </Container>
  );
};

export default ProductCard;
