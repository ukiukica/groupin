import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GroupList from "../GroupList";
import "./Dashboard.css";

function Dashboard() {
  const user = useSelector((state) => state.session.user);
  const allGroups = useSelector((state) => state.groups);
  const pinnedIds = user.pinned;
  const pinnedGroups = [];
  pinnedIds.forEach((id) => {
    return pinnedGroups.push(allGroups[id]);
  });

  return (
    <div id="dashboard-container">
      <div id="dashboard">
        <div id="username-div">
          <h1>Hello, {user.username}!</h1>
        </div>
        <div id="dashboard-btns-div">
          <button className="dashboard-btns">Pinned Groups</button>
          {/* <button className="dashboard-btns">Suggested Groups</button> */}
          <button className="dashboard-btns">Browse All</button>
        </div>
        <br/>
        <div>Search...</div>
        <br/>
        <GroupList />
      </div>
    </div>
  );
}

export default Dashboard;
