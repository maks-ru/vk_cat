import React from "react";
import { NavLink } from "react-router-dom";
import "../../../styles/nav.scss";

function Nav({ onTransfer }) {
  return (
    <nav className="nav">
      <div className="nav-wrapper">
        <NavLink className="nav-link" to="/">
          Все котики
        </NavLink>
        <NavLink className="nav-link" to="/favorites">
          Любимые котики
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
