import React from "react";
import { NavLink } from "react-router-dom";

type NavigationLinksProps = {
  setIsNavOpen?: Function;
  isNavOpen?: boolean;
};

export default function NavigationLinks({
  setIsNavOpen,
  isNavOpen,
}: NavigationLinksProps) {
  function handleClick() {
    if (setIsNavOpen) {
      setIsNavOpen(!isNavOpen);
    }
  }

  return (
    <div className="links">
      <NavLink
        to="/portfolio"
        className="px-5 uppercase left-underline"
        onClick={handleClick}
      >
        Web Development
      </NavLink>
      <NavLink
        to="/blog"
        className="px-5 uppercase left-underline"
        onClick={handleClick}
      >
        Blog
      </NavLink>
      <NavLink
        to="/contact"
        className="px-5 uppercase left-underline"
        onClick={handleClick}
      >
        Contact
      </NavLink>
    </div>
  );
}
