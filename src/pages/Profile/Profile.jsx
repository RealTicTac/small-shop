import React from "react";
import { useSelector } from "react-redux";

import ProfileTabs from "components/ProfileTabs/ProfileTabs";
import { selectCurrentUser } from "redux/slices/user.slice";
import { TabContent } from "components/ProfileTabs/ProfileTabs.styles";
import ProfileInfo from "components/ProfileInfo/ProfileInfo";
import History from "pages/History/History";

const Profile = () => {
  const user = useSelector(selectCurrentUser);
  console.log(user);
  if (!user) return <div>You not authorized to access here!</div>;
  return (
    <>
      <ProfileTabs startingTab={0}>
        <TabContent label="Info" element={<ProfileInfo />} />
        <TabContent label="History" element={<History />} />
      </ProfileTabs>
    </>
  );
};

export default Profile;
