import { NavLink } from "react-router-dom";

function NavigationLinks() {
  return (
    <div className="links">
      <NavLink
        to="/portfolio"
        className="px-5 uppercase left-underline"
        activeClassName="text-accent-light"
      >
        Web Development
      </NavLink>
      <NavLink
        to="/blog"
        className="px-5 uppercase left-underline"
        activeClassName="text-accent-light"
      >
        Blog
      </NavLink>
      <NavLink
        to="/contact"
        className="px-5 uppercase left-underline"
        activeClassName="text-accent-light"
      >
        Contact
      </NavLink>
    </div>
  );
}

export default NavigationLinks;
