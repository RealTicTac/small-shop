import styled from "styled-components/macro";

export const Container = styled.div``;

export const TabsContainer = styled.div`
  display: flex;
  height: 40px;

  & > div:first-child {
    text-align: end;
  }
  & > div:last-child {
    text-align: start;
  }
`;

export const Tab = styled.div`
  height: 40px;
  line-height: 40px;
  width: 100%;
  text-align: end;
  padding: 0 10px;
  border: 1px solid black;
  border-width: ${(props) => (props.active ? "1px 1px 0 1px" : "0 0 1px 0")};
`;

export const TabContent = styled.div``;
