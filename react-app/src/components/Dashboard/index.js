import React, { useState } from "react";
import { useSelector } from "react-redux";
import GroupList from "../GroupList";
import Search from "../Search";
import "./Dashboard.css";

function Dashboard() {
  const sessionUserId = useSelector((state) => state.session.user.id);
  const users = useSelector((state) => state.users);
  const user = users[sessionUserId];
  // console.log("BEFORE SESSION USER");
  // const user = useSelector((state) => state.session.user);  // this should be changed to look like in Pin component ^^
  // console.log("AFTER SESSION USER");
  const groupObjs = useSelector((state) => state.groups);
  const allGroups = Object.values(groupObjs);
  const pinnedIds = user.pinned;
  const pinnedGroups = [];
  // console.log("BEFORE PINNED GROUPS");
  pinnedIds?.forEach((id) => {
    return pinnedGroups.push(groupObjs[id]);
  });
  // console.log("AFTER PINNED GROUPS");
  // console.log("pinnedGroups", pinnedGroups);

  const [groupType, setGroupType] = useState(allGroups);
  const [searchedGroups, setSearchedGroups] = useState([]);
  const [showSearched, setShowSearched] = useState(false);
  const [displayPinned, setDisplayPinned] = useState(false);


  const handleDisplayPinned = () => {
    setGroupType(pinnedGroups)
    setDisplayPinned(true);
  }

  const handleDisplayAll = () => {
    setGroupType(allGroups)
    setDisplayPinned(false);
  }

  // console.log('grouptype', groupType)
  return (
    <div id="dashboard-container">
      <div id="dashboard">
        <div id="username-div">
          <h1>Hey, {user.username}!</h1>
        </div>
        <Search
          setSearchedGroups={setSearchedGroups}
          setShowSearched={setShowSearched}
          groupType={groupType}
        />
        <div id="dashboard-tabs-div">
          <button
            // className="dashboard-btns"
            className={displayPinned ? "dashboard-tabs selected-tab" : "dashboard-tabs"}
            id="pinned-tab"
            // onClick={() => setGroupType(pinnedGroups)}
            onClick={handleDisplayPinned}
          >
            Pinned groups
          </button>
          {/* <button className="dashboard-tab">Suggested Groups</button> */}
          <button
            // className="dashboard-tab"
            className={!displayPinned ? "dashboard-tabs  selected-tab" : "dashboard-tabs"}
            id="browse-all-tab"
            onClick={handleDisplayAll}
          >
            Browse all groups
          </button>
        </div>
        <GroupList groupType={showSearched ? searchedGroups : groupType} />
      </div>
    </div>
  );
}

export default Dashboard;
