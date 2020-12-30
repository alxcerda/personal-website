import React from "react";
import NavigationDesktop from "./NavigationDesktop";
import NavigationMobile from "./NavigationMobile";

export default function Navigation() {
  return (
    <nav>
      <div className="desktop-nav">
        <NavigationDesktop />
      </div>
      <div className="mobile-nav">
        <NavigationMobile />
      </div>
    </nav>
  );
}
