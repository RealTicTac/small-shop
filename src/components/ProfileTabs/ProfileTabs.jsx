import React from "react";

import TabLabel from "./TabLabel";

import { Container, TabsContainer } from "./ProfileTabs.styles";

const ProfileTabs = ({ children, startingTab }) => {
  let initTab;
  switch (typeof startingTab) {
    case "string":
      initTab = startingTab;
      break;
    case "number":
      initTab = children[startingTab].props.label;
      break;
    default:
      initTab = startingTab;
  }
  const [activeTab, setActiveTab] = React.useState(initTab);
  const handleSelect = (e) => {
    setActiveTab(e);
  };
  return (
    <Container>
      <TabsContainer className="tabs">
        {children &&
          children.map((child, idx) => {
            return (
              <TabLabel
                onClick={handleSelect}
                label={child.props.label}
                active={child.props.label === activeTab}
                key={idx}
              />
            );
          })}
      </TabsContainer>
      <>
        {children &&
          children.map((child) => {
            if (child.props.label === activeTab) return child.props.element;
            return undefined;
          })}
      </>
    </Container>
  );
};

export default ProfileTabs;
