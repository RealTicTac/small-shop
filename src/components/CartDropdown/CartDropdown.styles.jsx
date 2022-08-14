import styled from "styled-components/macro";
import { GoogleSignIn, Base, Inverted } from "../Button/Button.styles";

export const Container = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: #fff;
  top: 90px;
  right: 40px;
  z-index: 5;
  ${GoogleSignIn}, ${Base}, ${Inverted} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
