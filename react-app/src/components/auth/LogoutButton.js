import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { logout } from "../../store/session";
import "./LogoutButton.css";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = async (e) => {
    await dispatch(logout());
    // history.push('/');
  };

  return (
    <NavLink
      to="/"
      exact={true}
      activeClassName="active"
      id="logout-btn"
      onClick={onLogout}
    >
      Log out
    </NavLink>
  );
};

export default LogoutButton;
