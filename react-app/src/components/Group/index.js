import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GroupDetails from "../GroupDetails";
import Pin from "../Pin";
import "./Group.css";

const Group = ({ group }) => {
  const [showDetails, setShowDetails] = useState(false);
  console.log("showDetails", showDetails);
  return (
    <>
      <div
        id="group-container"
        onClick={() =>
          showDetails ? setShowDetails(false) : setShowDetails(true)
        }
      >
        <div className="group-img-div">
          <img className="group-img" src={group?.img} alt="img" />
        </div>
        <div className="group-name-div">
          <p className="group-name">{group?.name}</p>
        </div>
        <Pin id="pin-btn" group={group} />
      </div>
      {showDetails ? <GroupDetails group={group} /> : null}
    </>
  );
};

export default Group;
