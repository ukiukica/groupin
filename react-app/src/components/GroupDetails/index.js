import React from "react";
import "./GroupDetails.css";

const GroupDetails = ({ group }) => {
  return (
    <>
      <img className="list-img" src={group.img} alt="img" />
      <h1>{group.name}</h1>
      <p>{group?.details}</p>
      <a href={group?.link} target="_blank" rel="noopener noreferrer">
        Visit the group
      </a>
    </>
  );
};

export default GroupDetails;
