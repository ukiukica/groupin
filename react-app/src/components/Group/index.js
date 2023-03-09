import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Group.css";

const Group = ({ group }) => {
console.log('group', group)
  return (
    <>
      <p>{group.name}</p>
      <div className="list-img-div">
        <img
          className="list-img"
          src={group.img}
          alt="img"
        />
      </div>
    </>
  )
};

export default Group;
