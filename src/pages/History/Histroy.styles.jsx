import styled from "styled-components/macro";
import { Container as Spinner } from "components/Spinner/Spinner.styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const HistoryItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HistorySpinner = styled(Spinner)``;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  padding: 10px;
`;
