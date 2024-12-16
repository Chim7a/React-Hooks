import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="shadow-md p-3">
      <div className="container mx-auto flex justify-between p-3">
        <h3 className="text-xl font-extrabold tracking-wider text-blue-600">
          PT.store
        </h3>
        <div className="flex gap-2 text-sm font-thin">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about-us"}>About-us</NavLink>
          <NavLink to={"/marketplace"}>Our-marketplace</NavLink>
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
