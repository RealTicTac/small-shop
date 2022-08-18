import React from "react";
import { useSelector } from "react-redux";

import { getOrdersFromUser } from "utils/firebase/firebase.utils";

import HistoryItem from "components/HistoryItem/HistoryItem";

const History = () => {
  const [historyData, setHistoryData] = React.useState([]);
  const currentUser = useSelector((state) => state.user.currentUser);
  const handleHistory = async () => {
    setHistoryData(await getOrdersFromUser(currentUser));
  };
  console.log(historyData);
  return (
    <>
      <h2>Orders you have made:</h2>
      {historyData.length &&
        historyData.map((order, idx) => {
          return <HistoryItem order={order} key={idx} />;
        })}
      <button onClick={handleHistory}>Fetch History</button>
    </>
  );
};

export default History;
