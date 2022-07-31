import React from "react";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher";

function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 right-0 backdrop-blur bg-purple-100/25 z-10 dark:bg-neutral-900/25 dark:text-white">
      <div className="container w-full flex items-center justify-between h-14">
        <nav className="flex items-center space-x-6">
          <NavLink
            className={({ isActive }) => (isActive ? "font-bold" : undefined)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "font-bold" : undefined)}
            to="/about"
          >
            About me
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "font-bold" : undefined)}
            to="/projects"
          >
            Projects
          </NavLink>
        </nav>

        <ThemeSwitcher />
      </div>
    </nav>
  );
}

export default Navbar;
