import { Tab } from "./ProfileTabs.styles";
const TabLabel = ({ label, active, onClick }) => {
  return (
    <Tab className="tablabel" active={active} onClick={() => onClick(label)}>
      {label}
    </Tab>
  );
};
export default TabLabel;
