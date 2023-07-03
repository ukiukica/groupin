import React from "react";
import "./GroupDetails.css";

const GroupDetails = ({ group }) => {
  return (
    <div className="group-details-cntr">
      {/* <img className="list-img" src={group.img} alt="img" /> */}
      {/* <h1>{group.name}</h1> */}
      <p className="group-details">{group?.details}</p>
      <div className="group-link-div">
        <a className="group-link" href={group?.link} target="_blank" rel="noopener noreferrer">
          Take me to the group!
        </a>
      </div>
    </div>
  );
};

export default GroupDetails;
