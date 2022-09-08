import React from "react";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";

import { selectItemById } from "redux/slices/categories.slice";

import { formatFireBaseDate } from "utils/date.utils";

import {
  CreatedAt,
  OrderStatus,
  PaymentStatus,
  OrderDetails,
  Product,
  Name,
  Price,
  Container,
  ItemsDetails,
  OrderId,
  Image,
} from "./HistoryItem.styles";

const OrderedProduct = ({ item }) => {
  //eslint-disable-next-line
  const memoSelect = React.useCallback(selectItemById(item.productId), [
    item.productId,
    selectItemById,
  ]);
  const product = useSelector(memoSelect);
  console.log(product);
  return (
    <Product>
      <Image src={product.imageUrl} alt={product.name} />
      <Name>{product.name}</Name>
      <Price>
        {item.quantity}*{product.price}=${product.price * item.quantity}
      </Price>
    </Product>
  );
};

const HistoryItem = ({ order }) => {
  const [show, setShow] = React.useState(false);
  const { createdAt, status, paymentStatus, items } = order;
  const handleOrderClick = () => setShow(!show);
  return (
    <Container>
      <OrderDetails onClick={handleOrderClick}>
        {show ? (
          <Icon icon="mdi:chevron-up" />
        ) : (
          <Icon icon="mdi:chevron-down" />
        )}
        <OrderId>Some Id</OrderId>
        <OrderStatus>Status: {status}</OrderStatus>
        <PaymentStatus>
          PaymentStatus:{" "}
          {paymentStatus === "done" ? (
            <Icon icon="mdi:check-all" />
          ) : (
            <Icon icon="mdi:progress-clock" />
          )}
        </PaymentStatus>
        <CreatedAt>CreatedAt: {formatFireBaseDate(createdAt)}</CreatedAt>
      </OrderDetails>
      <ItemsDetails show={show}>
        {items &&
          items.map((item) => (
            <OrderedProduct item={item} key={item.productId} />
          ))}
      </ItemsDetails>
    </Container>
  );
};

export default HistoryItem;
