import { NavLink } from "react-router-dom";

function NavigationLinks() {
  return (
    <div className="links">
      <NavLink to="/portfolio" className="px-5 uppercase left-underline">
        Web Development
      </NavLink>
      <NavLink to="/blog" className="px-5 uppercase left-underline">
        Blog
      </NavLink>
      <NavLink to="/contact" className="px-5 uppercase left-underline">
        Contact
      </NavLink>
    </div>
  );
}

export default NavigationLinks;
