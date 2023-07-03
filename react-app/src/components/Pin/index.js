import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pinGroup, unpinGroup, viewUsers } from "../../store/users";
import "./Pin.css"

const Pin = ({ group }) => {
  const dispatch = useDispatch();

  const sessionUserId = useSelector((state) => state.session.user.id);
  const users = useSelector((state) => state.users);
  const user = users[sessionUserId];

  const pinnedSet = new Set(user.pinned);

  const handleClick = async (e) => {
    // isPinned ? setIsPinned(false) : setIsPinned(true);
    e.preventDefault();
    e.stopPropagation();

    const payload = {
      userId: user.id,
      groupId: group.id,
    };
    pinnedSet.has(group.id)
      ? await dispatch(unpinGroup(payload))
      : await dispatch(pinGroup(payload));
  };

  // useEffect(() => {
  //   dispatch(viewUsers());
  // }, [dispatch, users]);

  return (
    <>
      {!pinnedSet.has(group.id) ? (
        <button className="pin-btn" onClick={(e) => handleClick(e)}>
          <i className="fa-regular fa-circle-dot"></i>
        </button>
      ) : (
        <button className="pin-btn" onClick={(e) => handleClick(e)}>
          <i className="fa-solid fa-thumbtack"></i>
        </button>
      )}
    </>
  );
};

export default Pin;
