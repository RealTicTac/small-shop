import React from "react";
import { useDispatch } from "react-redux";

import Button from "../Button/Button";
import { addItemToCart } from "redux/slices/cart.slice";

import { Name, Price, Container, Info, Image } from "./ProductCard.styles";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { imageUrl, name, price } = product;

  const onAddHandler = () => {
    dispatch(addItemToCart(product));
  };
  return (
    <Container>
      <Image src={imageUrl} alt={name}></Image>
      <Info>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Info>
      <Button buttonType="inverted" onClick={onAddHandler}>
        Add to cart
      </Button>
    </Container>
  );
};

export default ProductCard;
