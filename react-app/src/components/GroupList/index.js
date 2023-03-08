import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./GroupList.css";

const GroupList = () => {

  const groups = useSelector((state) => state.groups);
  console.log("groups", groups)
  return (
    <>
    </>
  );
};

export default GroupList;