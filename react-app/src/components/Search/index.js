import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Search.css";

function Search({ setSearchedGroups, setShowSearched, groupType }) {
  const [query, setQuery] = useState("");

  console.log("query", query)

  useEffect(() => {
    const searched = query ? groupType.filter((group) => {
      if (group?.name?.toLowerCase()?.includes(query?.toLowerCase())) {
        return group;
      }
    })
    :
    [];

    setSearchedGroups(searched);
    query ? setShowSearched(true) : setShowSearched(false);
  }, [query])


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
        {/* {query
          ? groupType.filter((group) => {
              if (group?.name?.toLowerCase()?.includes(query?.toLowerCase())) {
                return group;
              }
            })
        //   : //   .map((user) => (
                <div className="search-results-container" key={user?.id}>
                  <a
                    href={`/users/${user?.id}`}
                    style={{ textDecoration: "none" }}
                    className="username-result"
                  >
                    <div className="search-result-div">
                      <div className="search-imgs-div">
                        <GetImg userId={user?.id} />
                      </div>
                      <p className="search-result">{`${user?.username}`}</p>
                    </div>
                  </a>
                </div>
              ))
            null} */}
      </div>
    </>
  );
}

export default Search;
