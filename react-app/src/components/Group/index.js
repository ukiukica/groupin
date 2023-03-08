import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Group.css";

const Group = ({ group }) => {
console.log('group', group)
  return (
    <>
      <p>{group.name}</p>
      <img
        src={group.img}
        alt="img"
      />
    </>
  )
};

export default Group;
