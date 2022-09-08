import React from "react";
import { useSelector } from "react-redux";

import HistoryItem from "components/HistoryItem/HistoryItem";

import { selectCurrentUser } from "redux/slices/user.slice";
import { getOrdersFromUser } from "utils/firebase/firebase.utils";

import {
  Container,
  Title,
  HistorySpinner,
  HistoryItems,
} from "./Histroy.styles";

const History = () => {
  const [historyData, setHistoryData] = React.useState([]);
  const currentUser = useSelector(selectCurrentUser);

  React.useEffect(() => {
    (async () => {
      setHistoryData(
        (await getOrdersFromUser(currentUser)).sort((a, b) => {
          return -1 * (a.createdAt.seconds - b.createdAt.seconds);
        })
      );
    })();
  }, []);
  return (
    <Container>
      <Title>Orders you have made so far</Title>
      {historyData.length < 1 ? (
        <HistorySpinner />
      ) : (
        <HistoryItems>
          {historyData.map((order, idx) => {
            return <HistoryItem order={order} key={idx} />;
          })}
        </HistoryItems>
      )}
    </Container>
  );
};

export default History;
