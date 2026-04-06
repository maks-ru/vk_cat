import React from "react";
import "../../../styles/nav.scss";

function Nav({ onTransfer }) {
  return (
    <nav className="nav">
      <div className="nav-wrapper">
        <a className="nav-link" href="/vk_cat">
          Все котики
        </a>
        <a className="nav-link" href="/favorites">
          Любимые котики
        </a>
      </div>
    </nav>
  );
}

export default Nav;
