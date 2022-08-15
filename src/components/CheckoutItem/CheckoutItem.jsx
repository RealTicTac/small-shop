import React from "react";
import { useDispatch } from "react-redux";

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../redux/slices/cart.slice";

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

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { imageUrl, name, price, count } = cartItem;
  const onAddItemHandler = () => dispatch(addItemToCart(cartItem));
  const onRemoveItemHandler = () => dispatch(removeItemFromCart(cartItem));
  const onClearItemHandler = () => dispatch(clearItemFromCart(cartItem));
  return (
    <Container>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Title>{name}</Title>
      <CountContainer>
        <Arrow onClick={onRemoveItemHandler}>&#10094;</Arrow>
        <Count>{count}</Count>
        <Arrow onClick={onAddItemHandler}>&#10095;</Arrow>
      </CountContainer>
      <Price>${price}</Price>
      <RemoveButton onClick={onClearItemHandler}>&#10005;</RemoveButton>
    </Container>
  );
};

export default CheckoutItem;
