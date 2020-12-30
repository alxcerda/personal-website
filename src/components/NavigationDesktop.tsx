import React from "react";
import { NavLink } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";

export default function NavigationDesktop() {
  return (
    <div className="py-5 flex flex-col items-center justify-center z-10 border border-b-accent-light border-t-0 border-r-0 border-l-0">
      <NavLink to="/" className="text-4xl text-accent-dark title-font">
        alexandra cerda
      </NavLink>
      <div className="pt-5">
        <NavigationLinks />
      </div>
    </div>
  );
}
