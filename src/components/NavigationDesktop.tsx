import { NavLink } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";

function NavigationDesktop() {
  return (
    <div className="py-5 flex flex-col items-center justify-center z-10">
      <NavLink to="/" className="text-4xl text-accent-dark title-font">
        alex cerda
      </NavLink>
      <div className="pt-5">
        <NavigationLinks />
      </div>
    </div>
  );
}

export default NavigationDesktop;
