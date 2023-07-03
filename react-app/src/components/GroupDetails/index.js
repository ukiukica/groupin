import React from "react";
import "./GroupDetails.css";

const GroupDetails = ({ group }) => {
  return (
    <div className="group-details">
      {/* <img className="list-img" src={group.img} alt="img" /> */}
      {/* <h1>{group.name}</h1> */}
      <p>{group?.details}</p>
      <div className="group-link-cntr">
        <a className="group-link" href={group?.link} target="_blank" rel="noopener noreferrer">
          Take me to the group!
        </a>
      </div>
    </div>
  );
};

export default GroupDetails;
