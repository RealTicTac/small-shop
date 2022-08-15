import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.span`
  width: 23%;
`;
export const Arrow = styled.span`
  cursor: pointer;
`;

export const CountContainer = styled(Title)`
  display: flex;
`;
export const Count = styled.span`
  margin: 0 10px;
`;

export const Price = styled("span")`
  width: 23%;
`;

export const RemoveButton = styled.span`
  padding-left: 12px;
  cursor: pointer;
`;
