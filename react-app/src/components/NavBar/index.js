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
          {!sessionUser ? (
            <>
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
                id="sign-up-btn"
              >
                Sign Up
              </NavLink>
            </>
          ) : (
            // <NavLink
            //   to="/dashboard"
            //   exact={true}
            //   activeClassName="active"
            //   className="nav-right-links"
            // >
            //   Dashboard
            // </NavLink>
            <Dropdown />
            // <LogoutButton />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
