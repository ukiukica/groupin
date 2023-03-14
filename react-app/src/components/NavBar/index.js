import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import "./NavBar.css";

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);

  console.log('sessionUser', sessionUser)
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
          {sessionUser ?
          <NavLink
            to="/dashboard"
            exact={true}
            activeClassName="active"
            className="nav-right-links"
          >
            Dashboard
          </NavLink>
          :
          <NavLink
            to="/login"
            exact={true}
            activeClassName="active"
            className="nav-right-links"
          >
            Login
          </NavLink>
          }
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
