import React, { useState } from "react";
import { useSelector } from "react-redux";

const Pin = ({ group }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const pinnedSet = new Set(sessionUser.pinned);

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
