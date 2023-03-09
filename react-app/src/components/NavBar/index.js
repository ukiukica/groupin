import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav id="nav-links-div">
      <div id="nav-links">
        <div id="nav-left">
          <NavLink
            to="/"
            exact={true}
            activeClassName="active"
            id="nav-home-link"
          >
            Home
          </NavLink>
        </div>
        <div id="nav-right">
          <NavLink
            to="/login"
            exact={true}
            activeClassName="active"
            className="nav-right-links"
          >
            Login
          </NavLink>
          <NavLink
            to="/sign-up"
            exact={true}
            activeClassName="active"
            className="nav-right-links"
          >
            Sign Up
          </NavLink>
          {/* <NavLink
          to="/users"
          exact={true}
          activeClassName="active"
          className="nav-right-links"
        >
          Users
        </NavLink> */}
          <LogoutButton />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
