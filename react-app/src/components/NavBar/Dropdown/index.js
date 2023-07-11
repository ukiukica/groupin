import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import LogoutButton from "../../auth/LogoutButton";
import "./Dropdown.css";

function Dropdown() {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <div id="dropdown-container">
      <button id="dropdown-btn" onClick={openMenu}>
        <i class="fa-solid fa-bars" id="dropdown-icon"></i>
      </button>
      {showMenu && (
        <ul id="dropdown-list">
          <li className="dropdown-items first-item">
            <NavLink
              to="/"
              exact={true}
              activeClassName="active"
              id="nav-home-link"
            >
              Home
            </NavLink>
          </li>
          <li className="dropdown-items">
            <LogoutButton />
          </li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
