import React from "react";
import classes from "./nav.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className={classes.nav}>
      <NavLink to="/Profile" activeClassName={classes.active}>
        <div className={classes.item}>Profile</div>
      </NavLink>
      <NavLink to="/Dialogs" activeClassName={classes.active}>
        <div className={classes.item}>Dialogs </div>
      </NavLink>
      <NavLink to="/News" activeClassName={classes.active}>
        <div className={classes.item}>News </div>
      </NavLink>
      <NavLink to="/Music" activeClassName={classes.active}>
        <div className={classes.item}>Music </div>
      </NavLink>
      <NavLink to="/Settings" activeClassName={classes.active}>
        <div className={classes.item}>Settings </div>
      </NavLink>
    </nav>
  );
}

export default Navbar;
