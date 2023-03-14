import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Group from "../Group";
import "./GroupList.css";

const GroupList = ({ groupType }) => {
  return (
    <>
      {groupType.map((group) => (
        <Group key={group?.id} group={group} />
      ))}
    </>
  );
};

export default GroupList;
