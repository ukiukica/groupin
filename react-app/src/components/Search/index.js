import React, { useState, useEffect } from "react";
import "./Search.css";

function Search({ setSearchedGroups, setShowSearched, groupType }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const searched = query
      ? groupType.filter((group) => {
          if (group?.name?.toLowerCase()?.includes(query?.toLowerCase())) {
            return group;
          }
        })
      : [];

    setSearchedGroups(searched);
    query ? setShowSearched(true) : setShowSearched(false);
  }, [query, groupType]);

  return (
    <>
      <div className="search-container">
        <div className="search-div">
          {/* <img id="search-img" src={search} alt="search" /> */}
          <input
            id="search"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default Search;
