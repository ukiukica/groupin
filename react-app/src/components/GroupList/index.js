import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Group from "../Group";
import "./GroupList.css";

const GroupList = () => {

  const groups = useSelector((state) => {
    return Object.values(state.groups)
  });
  console.log("groups", groups)
  return (
    <>
      {groups.map((group) => (
        <>
        <Group key={group.id} group={group} />
        </>
      ))}
    </>
  );
};

export default GroupList;
