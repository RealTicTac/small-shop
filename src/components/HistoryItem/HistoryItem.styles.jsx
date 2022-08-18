import styled, { css } from "styled-components/macro";

const itemsCss = css`
  padding: 0 5px;
  width: 25%;
  border-right: 1px solid rgba(0, 0, 0, 0.3);
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OrderDetails = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
`;

export const OrderId = styled.span`
  ${itemsCss}
`;

export const PaymentStatus = styled.span`
  ${itemsCss}
`;

export const OrderStatus = styled.span`
  ${itemsCss}
`;

export const CreatedAt = styled.span`
  ${itemsCss}
  border: none;
`;

export const TotalPrice = styled.span``;

export const ItemsDetails = styled.div`
  display: ${(props) => (props.show ? "grid" : "none")};
  padding: 5px;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Product = styled.div`
  align-items: center;
  margin: 5px;
  display: grid;
  grid-template-columns: 25% 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "Image Name"
    "Image Price";
  border: 1px solid darkgrey;
  padding: 5px;
`;

export const Price = styled.span`
  grid-area: Price;
  justify-self: end;
`;

export const Quantity = styled.span`
  grid-area: Price;
`;

export const Image = styled.img`
  height: 40px;
  width: 40px;
  object-fit: contain;
  grid-area: Image;
`;

export const Name = styled.span`
  grid-area: Name;
  justify-self: center;
`;
