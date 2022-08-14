import styled from "styled-components/macro";

export const Total = styled.span`
  font-size: 36px;
  margin-left: auto;
  margin-top: 30px;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`;

export const CheckoutHeader = styled.div`
  display: flex;
  padding: 10px 0;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const Contrainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;
