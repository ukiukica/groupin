import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Group from "../Group";
// import viewGroups
import "./GroupList.css";

const GroupList = ({ groupType }) => {

  // useEffect(() => {

  // })

  return (
    <>
      {groupType.map((group) => (
        <Group key={group?.id} group={group} />
      ))}
    </>
  );
};

export default GroupList;
