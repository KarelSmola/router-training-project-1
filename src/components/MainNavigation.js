import React from "react";
import { Link, NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";

const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
