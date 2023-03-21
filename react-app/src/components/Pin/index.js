import React, { useState } from "react";
import { useSelector } from "react-redux";

const Pin = ({ group }) => {
  const sessionUserId = useSelector((state) => state.session.user.id);
  const users = useSelector((state) => state.users)
  const user = users[sessionUserId];

  const pinnedSet = new Set(user.pinned);

  const [isPinned, setIsPinned] = useState(Boolean(pinnedSet.has(group.id)));

  const handleClick = () => {
    isPinned ? setIsPinned(false) : setIsPinned(true);
  }

  return (
    <>
      {isPinned ? (
        <button onClick={() => handleClick()}>Unpin</button>
      ) : (
        <button onClick={() => handleClick()}>Pin</button>
      )}
    </>
  );
};

export default Pin;
