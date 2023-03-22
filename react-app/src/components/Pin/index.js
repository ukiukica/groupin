import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pinGroup } from "../../store/users";

const Pin = ({ group }) => {
  const dispatch = useDispatch();

  const sessionUserId = useSelector((state) => state.session.user.id);
  const users = useSelector((state) => state.users)
  const user = users[sessionUserId];

  const pinnedSet = new Set(user.pinned);

  const handleClick = async (e) => {
    // isPinned ? setIsPinned(false) : setIsPinned(true);
    e.preventDefault();

    const payload = {
      userId: user.id,
      groupId: group.id
    }

    await dispatch(pinGroup(payload));
  }

  return (
    <>
      {pinnedSet.has(group.id) ? (
        <button onClick={() => handleClick()}>Unpin</button>
      ) : (
        <button onClick={() => handleClick()}>Pin</button>
      )}
    </>
  );
};

export default Pin;
