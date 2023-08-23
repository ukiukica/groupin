import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./NavBar.css";

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <nav>
      <div id="nav-links">
        <div id="nav-left">
          <NavLink
            to="/"
            exact={true}
            activeClassName="active"
            id="groupin-link"
          >
            <i class="fa-solid fa-people-group"></i>&nbsp;
            Groupin
          </NavLink>
        </div>
        <div id="nav-right">
          <Dropdown />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
