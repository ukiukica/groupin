import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GroupList from "../GroupList";
import GroupDetails from "../GroupDetails";
import "./Dashboard.css";

function Dashboard() {
  const userName = useSelector((state) => state.session.user.username);
  console.log("userName", userName)
  return (
    <div id="dashboard-container">
      <div id="dashboard">
        <div id="username-div">
          <h1>Hello, {userName}!</h1>
        </div>
        <div id="dashboard-btns-div">
          <button className="dashboard-btns">Pinned Groups</button>
          <button className="dashboard-btns">Suggested Groups</button>
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
