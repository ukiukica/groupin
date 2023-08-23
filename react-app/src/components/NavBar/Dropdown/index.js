import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import LogoutButton from "../../auth/LogoutButton";
import "./Dropdown.css";

function Dropdown() {
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((state) => state.session.user);

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
          {user ? (
            <>
              <li className="dropdown-items first-item">
                <NavLink
                  to="/"
                  exact={true}
                  activeClassName="active"
                  className="dropdown-links"
                >
                  <i class="fa-solid fa-house-chimney"></i>
                  Home
                </NavLink>
              </li>
              <li className="dropdown-items">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                <LogoutButton />
              </li>
            </>
          ) : (
            <>
              <li className="dropdown-items first-item">
                <NavLink to="/login" exact={true} activeClassName="active" className="dropdown-links">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                  Log in
                </NavLink>
              </li>
              <li className="dropdown-items">
                <NavLink
                  to="/sign-up"
                  exact={true}
                  activeClassName="active"
                  className="dropdown-links"
                >
                  <i class="fa-solid fa-user-plus"></i>
                  Sign up
                </NavLink>
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
