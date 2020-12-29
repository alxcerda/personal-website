import { NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import NavigationLinks from "./NavigationLinks";
import { useRef, useState } from "react";

function NavigationMobile() {
  const mobileLinks = useRef<HTMLDivElement>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleNav() {
    const classes = mobileLinks.current?.classList;

    if (!classes) return;

    if (classes.contains("active")) {
      classes.remove("active");

      setIsNavOpen(false);
    } else {
      classes.add("active");

      setIsNavOpen(true);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="z-10 bg-white w-full py-3">
        <NavLink
          to="/"
          className="text-3xl text-accent-dark title-font flex justify-center w-full"
        >
          alex cerda
        </NavLink>
      </div>
      <div className="mobile-nav__bar z-10">
        {isNavOpen && (
          <KeyboardArrowUpIcon
            className="cursor-pointer text-accent-medium fade-in-slow"
            onClick={toggleNav}
          />
        )}
        {!isNavOpen && (
          <KeyboardArrowDownIcon
            className="cursor-pointer text-accent-medium fade-in-slow"
            onClick={toggleNav}
          />
        )}
      </div>
      <div className="mobile-nav__links z-9 relative" ref={mobileLinks}>
        <NavigationLinks />
      </div>
    </div>
  );
}

export default NavigationMobile;
