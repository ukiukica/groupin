import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Group.css";

const Group = ({ group }) => {
  console.log("group", group);
  return (
    <>
    <div id="group-container">
      <div className="group-img-div">
        <img className="group-img" src={group.img} alt="img" />
      </div>
      <div className="group-name-div">
      <p className="group-name">{group.name}</p>
      </div>
    </div>
    </>
  );
};

export default Group;
