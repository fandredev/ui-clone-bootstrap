import React from "react";
import { pushRotate as Menu } from "react-burger-menu";
import "./styles.css";
import { Link } from "react-router-dom";

const Burger = () => {
  return (
    <Menu width={200}>
      <Link to="#" className="menu-item">
        Home
      </Link>
      <Link to="#" className="menu-item">
        Documentation
      </Link>
      <Link to="#" className="menu-item">
        Examples
      </Link>
      <Link to="#" className="menu-item">
        Services
      </Link>
      <Link to="#" className="menu-item">
        Icons
      </Link>
      <Link to="#" className="menu-item">
        Themes
      </Link>
      <Link to="#" className="menu-item">
        Expo
      </Link>
      <Link to="#" className="menu-item">
        Blog
      </Link>
    </Menu>
  );
};

export default Burger;
