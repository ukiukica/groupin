import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GroupList from "../GroupList";
import "./Dashboard.css";

function Dashboard() {
  const user = useSelector((state) => state.session.user);
  const groupObjs = useSelector((state) => state.groups);
  const allGroups = Object.values(groupObjs);
  const pinnedIds = user.pinned;
  const pinnedGroups = [];
  pinnedIds.forEach((id) => {
    return pinnedGroups.push(groupObjs[id]);
  });

  const [groupType, setGroupType] = useState(allGroups);

  return (
    <div id="dashboard-container">
      <div id="dashboard">
        <div id="username-div">
          <h1>Hello, {user.username}!</h1>
        </div>
        <div id="dashboard-btns-div">
          <button
            className="dashboard-btns"
            onClick={() => setGroupType(pinnedGroups)}
          >
            Pinned Groups
          </button>
          {/* <button className="dashboard-btns">Suggested Groups</button> */}
          <button
            className="dashboard-btns"
            onClick={() => setGroupType(allGroups)}
          >
            Browse All
          </button>
        </div>
        <br />
        <div>Search...</div>
        <br />
        <GroupList groupType={groupType} />
      </div>
    </div>
  );
}

export default Dashboard;
