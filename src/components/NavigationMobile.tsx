import { NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import NavigationLinks from "./NavigationLinks";
import { useState } from "react";

function NavigationMobile() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function getClasses(): string {
    const classes = ["mobile-nav__links", "z-9", "relative"];

    if (isNavOpen) {
      classes.push("active");
    }

    return classes.join(" ");
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
            onClick={() => setIsNavOpen(false)}
          />
        )}
        {!isNavOpen && (
          <KeyboardArrowDownIcon
            className="cursor-pointer text-accent-medium fade-in-slow"
            onClick={() => setIsNavOpen(true)}
          />
        )}
      </div>
      <div className={getClasses()}>
        <NavigationLinks />
      </div>
    </div>
  );
}

export default NavigationMobile;
