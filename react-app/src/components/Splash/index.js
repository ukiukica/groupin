import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import "./Splash.css";
import laughing from "../../images/laughing.jpg";

const Splash = () => {
  return (
    <>
      <h1 id="splash-h1">Welcome to Groupin 📌</h1>
      <div id="splash-inner-container">
        <div>
          <h2>
            Networking for job hunters in <i>tech</i>. 😎
          </h2>
          <div id="groupin-descript">
            A centralized platform of tech networking groups sourced from
            Meetup, Facebook, and more.
            <br />
            <br />
            Crafted specifically for those in tech, breaking into tech, or
            thinking of switching to tech.
            <br />
            <br />
            Looking for a new role in tech? Wondering how to take your job
            search to the next level?
            <br />
            Search for groups, pin them to your dashboard, and start networking.
            Let's get it!
          </div>
          <br />
          <br />
          <NavLink id="signup-btn" to="/sign-up" exact={true}>
            <button>Sign up now</button>
          </NavLink>
        </div>
        <div>
          <img id="laughing-img" src={laughing} alt="laughing" />
        </div>
      </div>
    </>
  );
};

export default Splash;
